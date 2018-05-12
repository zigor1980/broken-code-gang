const {
    findUserBySid, getUsers, addUser, setCurrentUser, logoutUser,
} = require('./database/user');
const {
    saveRoom, joinRoom, leaveRoom, getRooms, getUserRooms, getUserPersonalRooms, createRoom, getRoom, dropRoom,
} = require('./database/room');
const { getMessages, sendMessage } = require('./database/messages');
const TYPES = require('./messages');

/**
 * @param {Db} db
 * @param {*} io
 */
module.exports = function (db, io) {
    const ONLINE = {};

    /**
     * @param {Pagination<User>} users
     * @return {Pagination<User>}
     */
    function fillUsersWithStatus(users) {
        users.items = users.items.map(user => ({ ...user, online: Boolean(ONLINE[user._id]) }));

        return users;
    }

    /**
     * Connection is created
     */
    io.on('connection', (socket) => {
        let { sid } = socket.request.cookies,
            isDisconnected = false;

        socket.join('broadcast');

        /**
         * Invoke callback and handle errors
         *
         * @param callback
         */
        function wrapCallback(callback) {
            return function (...args) {
                const printErr = (err) => {
                    console.error(err);

                    socket.emit(TYPES.ERROR, {
                        message: err.message,
                        stack: err.stack,
                    });

                    throw err;
                };

                try {
                    return callback(...args).catch(printErr);
                } catch (err) {
                    printErr(err);
                }
            };
        }

        function requestResponse(type, callback) {
            socket.on(type, wrapCallback(async ({ id, payload }) => {
                socket.emit(type + id, await callback(payload));
            }));
        }

        /**
         * Send notification to every user about status change
         *
         * @param {string} userId
         */
        function userChangeOnlineStatus(userId) {
            socket.broadcast.emit(TYPES.ONLINE, {
                status: ONLINE[userId],
                userId,
            });
        }

        /**
         * Join to socket channel, to broadcast messages inside Room
         *
         * @param {string} roomId
         */
        function joinToRoomChannel(roomId) {
            socket.join(`room:${roomId}`);
        }

        /**
         * Leave socket channel
         *
         * @param {string} roomId
         */
        function leaveRoomChannel(roomId) {
            socket.leave(`room:${roomId}`);
        }

        // Join current user to room channel
        requestResponse(TYPES.CURRENT_USER_JOIN_CHANNEL, roomId => joinToRoomChannel(roomId));

        // Leave current user from room channel
        requestResponse(TYPES.CURRENT_USER_LEAVE_CHANNEL, roomId => leaveRoomChannel(roomId));

        /**
         * Broadcast messages inside Room about user joined
         *
         * @param {string} userId
         * @param {string} roomId
         */
        function userWasJoinedToRoom({ userId, roomId }) {
            socket.to(`room:${roomId}`).emit(TYPES.USER_JOINED, { userId, roomId });
        }

        /**
         * Broadcast messages inside Room about user leave
         *
         * @param {string} userId
         * @param {string} roomId
         */
        function userLeaveRoom({ userId, roomId }) {
            socket.to(`room:${roomId}`).emit(TYPES.USER_LEAVED, { userId, roomId });
        }

        /**
         * New message coming to room
         *
         * @param {Message} message
         */
        function newMessage(message) {
            socket.to(`room:${message.roomId}`).broadcast.emit(TYPES.MESSAGE, message);
        }

        // Load user information for next usage
        async function CurrentUser() {
            return await findUserBySid(db, sid);
        }

        // Receive current user information
        requestResponse(TYPES.CURRENT_USER, async () => await CurrentUser());

        // Return list of all users with
        requestResponse(TYPES.USERS, async params => fillUsersWithStatus(await getUsers(db, params || {})));

        // Add new user
        requestResponse(TYPES.ADD_USER, async payload => await addUser(db, {
            ...payload,
        }));

        // Create room
        requestResponse(TYPES.CREATE_ROOM, async (params) => {
            const currentUser = await CurrentUser();

            return createRoom(db, currentUser, params);
        });

        // Create room
        requestResponse(TYPES.ROOMS, params => getRooms(db, params || {}));

        // Get Users Of room
        requestResponse(TYPES.GET_USERS_OF_ROOM, async (roomId) => {
            const room = await getRoom(db, roomId);
            return getUsers(db, {
                _id: { $in: [...room.users] },
            });
        });

        // Set a current user
        requestResponse(TYPES.SET_CURRENT_USER, async (payload) => {
            payload = {
                ...payload,
                sid,
            };
            return setCurrentUser(db, payload);
        });

        // Logout current user
        requestResponse(TYPES.LOGOUT_CURRENT_USER, async () => await logoutUser(db, sid));

        // Rooms of current user
        requestResponse(TYPES.CURRENT_USER_ROOMS, async (params) => {
            const currentUser = await CurrentUser();

            return getUserRooms(db, currentUser._id, params);
        });

        // Return rooms with user
        requestResponse(TYPES.ROOM_EXIST, async (params) => {
            const currentUser = await CurrentUser();
            console.log(params);
            const { roomId, filter } = params; 
            return getUserPersonalRooms(db, currentUser._id, roomId, filter);
        });

        // Join current user to room
        requestResponse(TYPES.DROP_ROOM, async roomId => await dropRoom(db, roomId));

        // Join current user to room
        requestResponse(TYPES.CURRENT_USER_JOIN_ROOM, async ({ roomId }) => {
            const currentUser = await CurrentUser();

            const payload = {
                roomId,
                userId: currentUser._id,
            };

            userWasJoinedToRoom(payload);

            return joinRoom(db, payload);
        });

        // Join user to room
        requestResponse(TYPES.USER_JOIN_ROOM, (payload) => {
            userWasJoinedToRoom(payload);

            return joinRoom(db, payload);
        });

        // Leave current user to room
        requestResponse(TYPES.CURRENT_USER_LEAVE_ROOM, async ({ roomId }) => {
            const currentUser = await CurrentUser();

            const payload = {
                roomId,
                userId: currentUser._id,
            };

            leaveRoomChannel(roomId);
            userLeaveRoom(payload);

            return leaveRoom(db, payload);
        });

        // Remove user from room
        requestResponse(TYPES.REMOVE_USER_FROM_ROOM, async ({ userId, roomId }) => {
            const payload = {
                roomId,
                userId,
            };

            leaveRoomChannel(roomId);
            userLeaveRoom(payload);

            return leaveRoom(db, payload);
        });

        // Send message
        requestResponse(TYPES.SEND_MESSAGE, async (payload) => {
            const currentUser = await CurrentUser();
            const { roomId } = payload;
            const message = await sendMessage(db, {
                ...payload,
                userId: currentUser._id,
                name: currentUser.name,
            });

            const room = await getRoom(db, roomId);
            room.lastMessage = message;
            const newRoom = await saveRoom(db, room);
            newMessage(message);
            socket.broadcast.emit(TYPES.MESSAGE, message);

            return message;
        });

        // Get messages
        requestResponse(TYPES.MESSAGES, payload => getMessages(db, payload));


        CurrentUser().then(async (user) => {
            if (!user) {
                return;
            }
            if (!isDisconnected) {
                ONLINE[user._id] = true;
            }

            userChangeOnlineStatus(user._id);

            // Get of user groups
            const rooms = await getUserRooms(db, user._id);

            rooms.items.forEach((room) => {
                joinToRoomChannel(db, room._id);
            });
        });

        socket.on('disconnect', async () => {
            isDisconnected = true;
            const user = await CurrentUser();

            ONLINE[user._id] = false;

            userChangeOnlineStatus(user._id);
        });
    });
};

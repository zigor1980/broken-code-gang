import api from '../api';

export default function addRoom(name, user = []) {
    return async function (dispatch) {
        try {
            // Loading
            let room = null;
            if (user) {
                room = await api.createRoom(name);
                room = await api.currentUserJoinRoom(room._id);
                user.forEach(async (el) => {
                    room = await api.userJoinRoom(el, room._id);
                });
                dispatch({
                    type: 'ROOM_ADD',
                    room,
                });
            } else {
                const rooms = await api.getCurrentUserRooms();
                const roomExist = user && rooms.find((el) => {
                    if (el.users.length === 2) {
                        return el.users.some(elem =>
                            elem._id === user._id);
                    }
                    return false;
                });
                if (!roomExist) {
                    room = await api.createRoom(`${user.name}`);
                    room = await api.currentUserJoinRoom(room._id);
                    room = await api.userJoinRoom(user._id, room._id);

                    dispatch({
                        type: 'ROOM_ADD',
                        room,
                    });
                }
            }
        } catch (error) {
            dispatch({
                type: 'FEED_ERROR',
                error,
            });
        } finally {
            dispatch({
                type: 'FEED_LOADING',
            });
        }
    };
}

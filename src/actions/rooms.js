import api from '../api';

export default function addRoom({ user }) {
    return async function (dispatch) {
        try {
            // Loading
            const rooms = await api.getCurrentUserRooms();
            const roomExist = rooms.find((el) => {
                if (el.users.length === 2) {
                    return el.users.some(elem =>
                        elem._id === user._id);
                }
                return false;
            });
            let room = null;
            if (!roomExist) {
                room = await api.createRoom(`${user.name}`);
                room = await api.currentUserJoinRoom(room._id);
                room = await api.userJoinRoom(user._id, room._id);

                dispatch({
                    type: 'ROOM_ADD',
                    rooms: room,
                });
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

import api from '../api';

export default function leaveRoom(roomId) {
    return async function (dispatch) {
        try {
            // Loading
            const room = await api.currentUserLeaveRoom(roomId);

            if (room.users.length > 0 && room.users.length < 2) {
                await api.dropRoom(roomId);
            }
            dispatch({
                type: 'ROOMS_REMOVE',
                roomId,
            });
        } catch (error) {
            dispatch({
                type: 'ROOMS_ERROR',
                error,
            });
        }
    };
}


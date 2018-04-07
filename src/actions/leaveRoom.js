import api from '../api';

export default function leaveRoom(room) {
    return async function (dispatch) {
        try {
            // Loading
            await api.currentUserLeaveRoom(room);
            dispatch({
                type: 'LEAVE_ROOM',
            });
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


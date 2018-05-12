import api from '../api';

export default function addRoom(newRoom) {
    // eslint-disable-next-line
    return async function (dispatch) {
        try {
            // Loading
            let room = null;
            room = await api.createRoom(newRoom);
            dispatch({
                type: 'ROOM_ADD',
                room,
            });
            return room;
        } catch (error) {
            dispatch({
                type: 'ROOM_ADD_ERROR',
                error,
            });
        } finally {
            dispatch({
                type: 'FEED_LOADING',
            });
        }
    };
}

export function updateLastMessage(roomId, message) {
    return async function (dispatch) {
        try {
            const { name } = await api.getUser(message.userId);
            const newMessage = {
                ...message,
                userName: name,
            };
            dispatch({
                type: 'ROOMS_UPDATE_LAST_MESSAGE',
                newMessage,
            });
        } catch (error) {
            dispatch({
                type: 'ROOM_ERROR',
                error,
            });
        }
    };
}

import api from '../api';

export default function addRoom(name, user) {
    return async function (dispatch) {
        try {
            // Loading
            let room = null;
            room = await api.createRoom(name);
            room = await api.currentUserJoinRoom(room._id);
            // eslint-disable-next-line
            for (const current of user) {
                // eslint-disable-next-line
                await api.userJoinRoom(current, room._id);
            }
            dispatch({
                type: 'ROOM_ADD',
                room,
            });
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

export function updateLastMessage(message) {
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

import api from '../api';

export default function addUserToChat(roomId, contactId) {
    return async function (dispatch) {
        try {
            await api.userJoinRoom(contactId, roomId);
            const roomUsers = await api.getUsersOfRoom(roomId);
            dispatch({
                type: 'USER_ADDED_TO_CHAT',
                chatUsers: roomUsers,
            });
        } catch (error) {
            dispatch({
                type: 'USER_ADD_TO_CHAT_ERROR',
                error,
            });
        }
    };
}

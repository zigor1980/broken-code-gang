import { errorSendMessage, sendingMessage, addMessage } from './messages';
import api from '../api';

export default function sendMessage(roomId, text) {
    return async function (dispatch) {
        dispatch(sendingMessage(true));
        try {
            const message = await api.sendMessage(roomId, text);
            dispatch({
                type: 'ROOM_UPDATE',
                roomId,
                lastMessage: message,
            });
            dispatch(addMessage(message));
        } catch (error) {
            dispatch(errorSendMessage(error));
        } finally {
            dispatch(sendingMessage(false));
        }
    };
}

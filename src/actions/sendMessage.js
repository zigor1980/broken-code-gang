import { errorSendMessage, sendingMessage, addMessage } from './messages';
import api from '../api';
import replaceSmile from '../helpers/replaceSmile';

export default function sendMessage(roomId, text) {
    return async function (dispatch, getState) {
        dispatch(sendingMessage(true));
        try {
            text = replaceSmile(text);
            const message = await api.sendMessage(roomId, text);
            dispatch(addMessage(message));
        } catch (error) {
            dispatch(errorSendMessage(error));
        } finally {
            dispatch(sendingMessage(false));
        }
    };
}

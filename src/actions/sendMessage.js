import {addMessage} from "./messages";
import {errorSendMessage} from "./messages";
import {sendingMessage} from "./messages";
import api from '../api';


export function sendMessage(roomId, text) {
    return async function (dispatch, getState) {
        dispatch(sendingMessage(true));

        try {
            const message = await api.sendMessage(roomId, text);
            dispatch(addMessage(message));

        } catch (error) {
            dispatch(errorSendMessage(error));

        } finally {
            dispatch(sendingMessage(false));
        }

    };
}
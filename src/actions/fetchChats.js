import api from '../api';
import { resetChats } from '../actions/chatAction';

export function fetchChats() {

    return async function (dispatch, getState) {
        try {
            let chats = await api.getRooms();
            dispatch(resetChats(chats));
        } catch (error) {
            dispatch({
                type: 'CHAT_ERROR',
                error: 'RESET_ERROR'
            });
        } 

    };
}
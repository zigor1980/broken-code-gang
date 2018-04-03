import api from '../api';
import { resetChats } from '../actions/chatAction';

export default function fetchChats() {
    return async function (dispatch) {
        try {
            const chats = await api.getRooms();
            dispatch(resetChats(chats));
        } catch (error) {
            dispatch({
                type: 'CHAT_ERROR',
                error,
            });
        }
    };
}

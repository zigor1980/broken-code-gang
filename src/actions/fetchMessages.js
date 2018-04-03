import api from '../api';

export default function fetchMessages(roomId) {
    return async function (dispatch, getState) {
        dispatch({
            type: 'MESSAGES_LOADING',
            loading: true,
        });

        try {
            const messages = await api.getRoomMessages(roomId);
            dispatch({
                type: 'MESSAGES_LOADED',
                messages: messages,
            });
        } catch (error) {
            dispatch({
                type: 'MESSAGES_LOAD_ERROR',
                error,
            });
        } finally {
            dispatch({
                type: 'MESSAGES_LOADING',
                loading: false,
            });
        }
    };
}
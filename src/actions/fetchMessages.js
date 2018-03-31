export function fetchMessages({roomId}) {
    return async function (dispatch, getState) {
        dispatch({
            type: 'LOADING_MESSAGES',
            loading: true
        });

        try {
            const messages = await api.getRoomMessages(roomId);

            dispatch({
                type: 'FEED_APPEND_CARDS',
                cards: json.results,
                next: json.next
            });
        } catch (error) {
            dispatch({
                type: 'FEED_ERROR',
                error
            });
        } finally {
            dispatch({
                type: 'FEED_LOADING',
                loading: false
            });
        }

    };
}
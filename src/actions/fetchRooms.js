import api from '../api';

export default function fetchRooms() {
    return async function (dispatch, getState) {
        try {
            const room = await api.getCurrentUserRooms(getState().rooms.next);
            const { items, next } = room;
            const end = !!(next);
            for(let item of items){
                const messages = await api.getLastRoomMessages(item._id);
                let lastMessage = {};
                if(messages.items.length>0){
                    lastMessage = messages.items[0];
                    lastMessage.userName = (await api.getUser(lastMessage.userId)).name;
                    item.lastMessage = lastMessage;
                }
                else {
                    lastMessage.message = 'нет сообщений';
                    lastMessage.created_at = 0;
                }
            }
            items.sort(compareMessages);
            dispatch({
                type: 'ROOMS_FETCH',
                items,
                next,
                end,
            });
        } catch (error) {
            dispatch({
                type: 'ROOMS_ERROR',
                error,
            });
        }
    };
}

function compareMessages(a, b) {
    a = a && a.lastMessage && a.lastMessage.created_at;
    b = b && b.lastMessage && b.lastMessage.created_at;
    if (a > b)
        return -1;
    else
        return 1;
}

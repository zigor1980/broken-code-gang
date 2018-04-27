import api from '../api';

export default function fetchRooms() {
    return async function (dispatch, getState) {
        try {
            const room = await api.getCurrentUserRooms(getState().rooms.next);
            const { items, next } = room;
            const end = !!(next);
            for(let item of items){
                let lastMessage = (await api.getLastRoomMessages(item._id)).items[0];
                lastMessage.userName = (await api.getUser(lastMessage.userId)).name;
                item.lastMessage = lastMessage;
            }
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

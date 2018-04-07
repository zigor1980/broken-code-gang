import api from '../api';

export default function fetchRooms() {
    return async function (dispatch, getState) {
        try {
            let room = [];
            room = await api.getCurrentUserRooms(getState().rooms.next);
            const { items } = room;
            const { next } = room;
            dispatch({
                type: 'FETCH_ROOMS',
                items,
                next,
            });
        } catch (error) {
            dispatch({
                type: 'ROOM_ERROR',
                error,
            });
        }
    };
}

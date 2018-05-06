import api from '../api';

export default function fetchRooms() {
    return async function (dispatch, getState) {
        try {
            console.log('\n');
            console.log(getState().rooms.next);
            const room = await api.getCurrentUserRooms(getState().rooms.next);
            console.log(room);
            const { items, next } = room;
            dispatch({
                type: 'ROOMS_FETCH',
                items,
                next,
            });
        } catch (error) {
            dispatch({
                type: 'ROOMS_ERROR',
                error,
            });
        }
    };
}

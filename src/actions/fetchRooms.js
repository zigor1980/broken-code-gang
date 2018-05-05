import api from '../api';
import { compareMessages } from '../helpers/compareMessages';

export default function fetchRooms() {
    return async function (dispatch, getState) {
        try {
            const room = await api.getCurrentUserRooms(getState().rooms.next);
            const { items, next } = room;
            console.log(items);
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

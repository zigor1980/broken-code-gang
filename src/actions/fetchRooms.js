import api from '../api';

export default function fetchRooms() {
    return async function (dispatch, getState) {
        try {
            if (getState().rooms.next === null) {
                let room = await api.getCurrentUserRooms();
                room = room.items;
                dispatch({
                    type: 'FETCH_ROOMS',
                    room,
                });
            }
        } catch (error) {
            dispatch({
                type: 'ROOM_ERROR',
                error,
            });
        }
    };
}

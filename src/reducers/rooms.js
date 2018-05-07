export default function rooms(state, action) {
    if (!state) {
        return {
            items: [],
            next: true,
            error: null,
        };
    }
    switch (action.type) {
    case 'ROOM_ADD':
        return {
            ...state,
            items: [...state.items, action.room],
            newRoom: action.room,
        };
    case 'ROOMS_FETCH':
        return {
            ...state,
            items: [...state.items, ...action.items],
            next: action.next,
        };
    case 'ROOMS_RESET':
        return {
            ...state,
            items: [],
            next: undefined,
        };
    case 'ROOMS_ERROR':
        return {
            ...state,
            error: action.error,
        };
    default:
        return state;
    }
}

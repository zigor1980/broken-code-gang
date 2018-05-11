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
            next: true,
        };
    case 'ROOMS_REMOVE':
        return {
            ...state,
            items: [...state.items].filter(elem => (elem._id !== action.roomId)),
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

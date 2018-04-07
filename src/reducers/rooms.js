export default function rooms(state, action) {
    if (!state) {
        return {
            items: [],
            next: null,
        };
    }
    switch (action.type) {
    case 'ROOM_ADD':
        return {
            ...state,
            items: [...state.items, action.room],
        };
    case 'FETCH_ROOMS':
        return {
            ...state,
            items: [...state.items, ...action.items],
            next: action.next,
        };
    default:
        return state;
    }
}

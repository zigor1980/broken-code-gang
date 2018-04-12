export default function rooms(state, action) {
    if (!state) {
        return {
            items: [],
            next: undefined,
        };
    }
    switch (action.type) {
    case 'ROOM_ADD':
        return {
            ...state,
            items: [...state.items, action.room],
            newRoom: action.room
        };
    case 'ROOMS_FETCH':
        return {
            ...state,
            items: [...state.items, ...action.items],
            next: action.next,
            end: action.end,
        };
    default:
        return state;
    }
}

export default function rooms(state, action) {
    if (!state) {
        return {
            items: [],
            next: true,
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
            end: action.end,
        };
        case 'USER_SIGN_OUT':
        return {
            items: [],
            next: true,
        };
    default:
        return state;
    }
}

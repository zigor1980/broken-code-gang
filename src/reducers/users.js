export default function users(state, action) {
    if (!state) {
        return {
            items: [],
            next: true,
        };
    }
    switch (action.type) {
    case 'USERS_FETCH':
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

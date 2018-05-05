import { compareMessages } from '../helpers/compareMessages';

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
        case 'USER_SIGN_OUT':
            return {
                items: [],
                next: true,
            };
        case 'ROOMS_RESET':
            return {
                ...state,
                items: [],
                next: true,
            };
        case 'ROOMS_UPDATE_LAST_MESSAGE':
            console.log(state);
            let newItems = [...state.items],
                newState = {
                    ...state,
                };
            newItems.forEach((item) => {
                if (item._id === (action && action.newMessage.roomId)) {
                    item.lastMessage = action.newMessage;
                    newState.items =  newItems;
                }
            });
            newState.items.sort(compareMessages);
            return newState;
        case 'ROOMS_ERROR':
            return {
                ...state,
                error: action.error,
            };
        default:
            return state;
    }
}

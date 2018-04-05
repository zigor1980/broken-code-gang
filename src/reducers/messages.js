const DEFAULT_MESSAGES = { items: [] };

const messages = (state, action) => {
    if (!state) {
        return {
            messages: DEFAULT_MESSAGES,
            loading: true,
        };
    }

    switch (action.type) {
    case 'MESSAGE_ADD':
        return {
            ...state,
            messages: {
                ...state.messages,
                items: [...state.messages.items, action.message],
            },
        };

    case 'MESSAGE_REMOVE':
        return false;

    case 'MESSAGE_READ':
        return false;

    case 'MESSAGE_SEND_ERROR':
        return action.error;

    case 'MESSAGE_SENDING':
        return state;

    case 'MESSAGES_LOADING':
        return {
            ...state,
            loading: action.type,
        };
    case 'MESSAGES_LOADED':
        return {
            ...state,
            messages: action.messages,
        };
    case 'MESSAGE_LOAD_ERROR':
        return {
            ...state,
            error: action.error,
        };
    default:
        return state;
    }
};

export default messages;

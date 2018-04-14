const route = (state, action) => {
    if (!state) {
        return {
            page: 'authorization',
            payload: {}
        };
    }

    switch (action.type) {
        case 'ROUTE_NAVIGATE':
            console.log("=====",state);
            console.log("-----",action);
        return {
            ...state,
            page: action.page,
            payload: {
                ...state.payload,
                ...action.payload,
            }
        };
    default:
        return state;
    }
};

export default route;

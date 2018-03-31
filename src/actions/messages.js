export const addMessage = message => ({
    type: 'ADD_MESSAGE',
    message,
});

export const removeMessage = () => ({
    type: 'REMOVE_MESSAGE',
});

export const readMessage = () => ({
    type: 'READ_MESSAGE',
});

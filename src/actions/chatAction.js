export const CHAT_ADD = 'CHAT_ADD';
export const CHAT_RESET = 'CHAT_RESET';

export function addChat(chat) {
    return {
        type: CHAT_ADD,
        chat,
    };
}

export function resetChats(chats) {
    return {
        type: CHAT_RESET,
        chats,
    };
}

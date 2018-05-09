export function compareMessages(a, b) {
    const first = a && a.lastMessage && a.lastMessage.created_at;
    const second = b && b.lastMessage && b.lastMessage.created_at;
    if (first > second) { return -1; }
    return 1;
}

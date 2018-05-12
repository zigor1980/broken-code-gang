export default function formatList(text) {
    const regIsImg = /^(list)-(.)+/gi;
    if (regIsImg.test(text)) {
        const list = text.replace(/^(list)-/gi, '').split('/');
        return {
            type: 'list',
            items: list,
        };
    }
    return null;
}

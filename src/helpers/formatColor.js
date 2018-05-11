export default function formatColor(text) {
    const regIsImg = /^(#[0-9a-f]{6}-)(.)+/gi;
    if (regIsImg.test(text)) {
        return {
            type: 'color',
            text: text.replace(/^(#[0-9a-f]{6}-)/gi, ''),
            color: text.match(/^(#[0-9a-f]{6})/gi)[0],
        };
    }
    return null;
}

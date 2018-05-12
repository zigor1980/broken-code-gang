export default function formatBold(text) {
    const regIsImg = /^(\/b)-(.)+/gi;
    if (regIsImg.test(text)) {
        return {
            type: 'bold',
            bold: text.replace(/^(\/b)-/gi, ''),
        };
    }
    return null;
}

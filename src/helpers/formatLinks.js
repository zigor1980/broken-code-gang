// const regFindUrls = /((http|https)\:\/\/)?[a-zA-Zа-яА-я0-9\-\_\.]+\.[a-zA-Zа-яА-я]{2,3}(\/\S*)?/gmi;
const regIsImg = /\.(gif|jpg|jpeg|tiff|png)$/gi;
const isUrl = require('is-url');

export default function createFormattedText(text) {
    if (isUrl(text)) {
        if (regIsImg.test(text)) {
            return {
                type: 'image',
                src: text,
            };
        }
        return {
            type: 'link',
            src: text,
        };
    }
    return {
        type: 'text',
        text,
    };
}

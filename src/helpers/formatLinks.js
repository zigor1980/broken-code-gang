// const regFindUrls = /((http|https)\:\/\/)?[a-zA-Zа-яА-я0-9\-\_\.]+\.[a-zA-Zа-яА-я]{2,3}(\/\S*)?/gmi;
import isUrl from 'is-url';

export default function formatLinks(text) {
    const regIsImg = /\.(gif|jpg|jpeg|tiff|png)/gi;
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
    return null;
}

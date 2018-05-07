export default function replaceUserName(name, title) {
    let result = title;
    if (title.includes(name)) {
        result = title.replace(name, '');
    }
    return result;
}

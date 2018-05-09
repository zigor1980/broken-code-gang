export default function shortenName(name) {
    let result = '';
    if (name) {
        const arrayName = name.split(' ');
        if (arrayName.length === 1) {
            result = name.substring(0, 2).toUpperCase();
        } else {
            result = `${arrayName[0].substring(0, 1).concat(arrayName[1].substring(0, 1)).toUpperCase()}`;
        }
    }
    return result;
}

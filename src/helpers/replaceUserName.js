export default function replaceUserName(name,title){
    if (title.includes(name)) {
        title = title.replace(name, '');
    }
    return title;
}
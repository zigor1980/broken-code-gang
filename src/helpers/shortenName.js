export default function shortenName(name){
    if(!name){
        return;
    }
    const arrayName = name.split(' ');
    if (arrayName.length === 1){
        return name.substring(0, 2).toUpperCase();
    } else {
        return `${arrayName[0].substring(0, 1).concat(arrayName[1].substring(0, 1)).toUpperCase()}`;
    }
}

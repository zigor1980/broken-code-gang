const smile = {
    '=)':'../../assets/icons/smile.png',
    '=(':'../../assets/icons/sad.png',
    '<3':'../../assets/icons/love.png',
    '=*':'../../assets/icons/kiss.png',
}

export default function smilesToObject(text){
    if (smile[text]){
        return {
            type: 'smile',
            src: smile[text],
        }
    }
}
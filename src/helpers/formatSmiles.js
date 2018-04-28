const smile = {
    '=)':'smile.png',
    ':)':'smile.png',
    '=(':'sad.png',
    ':(':'sad.png',
    '<3':'love.png',
    '=*':'kiss.png',
};


export default function formatSmiles(text){
    if (smile[text]) {
        return {
            type: 'smile',
            src: smile[text],
        }
    }
}
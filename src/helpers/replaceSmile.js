export default function replaceSmile(text, rules){
    const buf = text.split(' ');
    return buf.map((el)=>{
        for (let rule of rules){
            let result = rule(el);
            if (result){
                return result;
            }
        }
        return {
            type: 'text',
            text: el,
        }
    })
}
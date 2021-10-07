

export const Numbers = "1234567890"
/*
export function onlyNumbers(text: string) {
    const length = text.length;
    let newText = text;
    let notNumber: boolean;
    for(let i = 0; i < length; i++) {
        notNumber = true;
        for(let l = 0; l < Numbers.length; l++) {
            if (text.charAt(i) == Numbers.charAt(l)) {
                notNumber = false;
            }
    
        }
        if (notNumber) newText = newText.replace(text.charAt(i),"");
    }
    print(newText);
    return newText;
}*/

export function onlyNumbers(text: string) {
    const length = text.length;
    let newText = text;
    let notNumber: boolean;

    for(let i = 0; i < length; i++) {
        if (text.charAt(i) === "0" || S2I(text.charAt(i)) > 0 ) {}
        else {newText = newText.replace(text.charAt(i),"");}
    }

    //print(newText);
    return newText;
}
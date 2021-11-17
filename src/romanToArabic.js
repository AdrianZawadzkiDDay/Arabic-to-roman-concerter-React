function romanToArabic(roman){
    if(roman == null)
        return -1;
        var value;
    for(var i=0;i<roman.length;i++){
        current = char_to_int(roman.charAt(i));
        next = char_to_int(roman.charAt(i+1));
        console.log("Current",current);
        console.log("Next",next);
        if(current >= next){
            value = current + next;
            console.log(value);
        }
        else {
            console.log(value);
            value = next - current;
        } 
    }
    return value;
}

function char_to_int(character) {
    switch(character){
        case 'I': return 1;
        case 'V': return 5;
        case 'X': return 10;
        case 'L': return 50;
        case 'C': return 100;
        case 'D': return 500;
        case 'M': return 1000;
        default: return -1;
    }
}
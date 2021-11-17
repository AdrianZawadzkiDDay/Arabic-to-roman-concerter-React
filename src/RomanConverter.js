import React from "react";

class RomanConverter extends React.Component {

    state = {
        roman: null
    }

    handlechange = (event) => {
        // this.setState({roman: "I"})
        const arabic = event.target.value;
        var romanValue = this.arabicToRoman(arabic);
        console.log("asd", romanValue)
        this.setState({roman: romanValue})
    }


    arabicToRoman(number) {
        var lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},roman = '',i;
        for ( i in lookup ) {
            while ( number >= lookup[i] ) {
                roman += i;
                number -= lookup[i];
            }
        }
        return roman;
    }

    romanToArabic(roman){
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
    
    char_to_int(character) {
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


    render() {
        return (
            <div>
            <label>Arabic: <input onChange={this.handlechange} type="number"></input></label>
            <h1>Roman: {this.state.roman ? this.state.roman : "none"}</h1>
            </div>
    
        );
    }
}

export default RomanConverter;
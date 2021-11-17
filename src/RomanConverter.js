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
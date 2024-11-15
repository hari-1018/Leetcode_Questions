// Symbol	Value
// I	    1
// V	    5
// X	    10
// L	    50
// C	    100
// D	    500
// M	    1000

// Example 1:
// Input: num = 3749
// Output: "MMMDCCXLIX"

// Example 2:
// Input: num = 58
// Output: "LVIII"

// Example 3:
// Input: num = 1994
// Output: "MCMXCIV"

var intToRoman = function(num) {
    const romanNumbers = [
        {value:1000, symbol:"M"},
        { value: 900, symbol: "CM" },
        { value: 500, symbol: "D" },
        { value: 400, symbol: "CD" },
        { value: 100, symbol: "C" },
        { value: 90, symbol: "XC" },
        { value: 50, symbol: "L" },
        { value: 40, symbol: "XL" },
        { value: 10, symbol: "X" },
        { value: 9, symbol: "IX" },
        { value: 5, symbol: "V" },
        { value: 4, symbol: "IV" },
        { value: 1, symbol: "I" }
    ];
    let roman = "";
    for(const {value,symbol} of romanNumbers){
        while(num>=value){
            roman+=symbol;
            num-=value;
        }
    }
    return roman;
};
console.log(intToRoman(5));
console.log(intToRoman(58));
console.log(intToRoman(3749));
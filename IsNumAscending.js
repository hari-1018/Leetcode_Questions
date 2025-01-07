// A sentence is a list of tokens separated by a single space with no leading or trailing spaces. Every token is either a positive number consisting of digits 0-9 with no leading zeros, or a word consisting of lowercase English letters.
 

// Example 1:
// example-1
// Input: s = "1 box has 3 blue 4 red 6 green and 12 yellow marbles"
// Output: true
// Explanation: The numbers in s are: 1, 3, 4, 6, 12.
// They are strictly increasing from left to right.

// Example 2:
// Input: s = "hello world 5 x 5"
// Output: false

// Example 3:
// example-3
// Input: s = "sunset is at 7 51 pm overnight lows will be in the low 50 and 60 s"
// Output: false

var isNumAscending = function(s){
    let split = s.split(" ");
    let prevNum = 0;
    for(let s of split){
        if(!isNaN(s)){
            let currNum = parseInt(s);
            if(currNum <= prevNum){
                return false;
            }
            prevNum = currNum;
        }
    }
    return true;
}
console.log(isNumAscending("1 box has 3 blue 4 red 6 green and 12 yellow marbles"));
console.log(isNumAscending("hello world 5 x 5"));
console.log(isNumAscending("sunset is at 7 51 pm overnight lows will be in the low 50 and 60 s"))

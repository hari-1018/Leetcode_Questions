// Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the start of the string.

// If there are fewer than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and leave the other as original.

// Example 1:
// Input: s = "abcdefg", k = 2
// Output: "bacdfeg"

// Example 2:
// Input: s = "abcd", k = 2
// Output: "bacd"

var reverseString = function(s,k){
    let result = "";
    for(let i=0; i<s.length; i+=2*k){
    let reversed = s.slice(i, i+k).split("").reverse().join("");
    result += reversed;
    result += s.slice(i+k, i+2*k);

    }
    return result;
}
console.log(reverseString("abcdefg", 2))

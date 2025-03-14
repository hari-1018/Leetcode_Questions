// The power of the string is the maximum length of a non-empty substring that contains only one unique character.
// Given a string s, return the power of s.

// Example 1:
// Input: s = "leetcode"
// Output: 2
// Explanation: The substring "ee" is of length 2 with the character 'e' only.

// Example 2:
// Input: s = "abbcccddddeeeeedcba"
// Output: 5
// Explanation: The substring "eeeee" is of length 5 with the character 'e' only.

var maxPower = function(s) {
    let matches = s.match(/(.)\1*/g);
    return Math.max(...matches.map(string => string.length));
};

console.log(maxPower("leetcode"));       
console.log(maxPower("abbcccddddeeeeedcba")); 


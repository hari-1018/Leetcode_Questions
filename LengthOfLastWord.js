// Given a string s consisting of words and spaces, return the length of the last word in the string.
// A word is a maximal substring consisting of non-space characters only.

// Example 1:
// Input: s = "Hello World"
// Output: 5

// Example 2:
// Input: s = "   fly me   to   the moon  "
// Output: 4

var lengthOfLastWord = function(s) {
    let lastWordLength = 0;
    let i = s.length - 1;
    while(i>=0 && s[i] ===' '){
        i--;
    }
    while(i>=0 && s[i] !== ' '){
        lastWordLength++;
        i--;
    }
    return lastWordLength;
};

console.log(lengthOfLastWord('Hello World'));
console.log(lengthOfLastWord('fly me to the moon'))
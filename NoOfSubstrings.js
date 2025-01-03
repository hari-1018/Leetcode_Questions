// Given an array of strings patterns and a string word, return the number of strings in patterns that exist as a substring in word.

// A substring is a contiguous sequence of characters within a string.

// Example 1:
// Input: patterns = ["a","abc","bc","d"], word = "abc"
// Output: 3
// Explanation:
// - "a" appears as a substring in "abc".
// - "abc" appears as a substring in "abc".
// - "bc" appears as a substring in "abc".
// - "d" does not appear as a substring in "abc".

// Example 2:
// Input: patterns = ["a","b","c"], word = "aaaaabbbbb"
// Output: 2

// Example 3:
// Input: patterns = ["a","a","a"], word = "ab"
// Output: 3

var numOfStrings = function(patterns, word){
    let count=0;
    for(const pattern of patterns){
        if(word.includes(pattern)){
            count ++;
        }
    }
    return count;
}
console.log(numOfStrings(["a","abc","bc","d"], "abc"));
console.log(numOfStrings(["a","b","c"], "aaaaabbbbb"));
console.log(numOfStrings(["a","a","a"], "ab"));
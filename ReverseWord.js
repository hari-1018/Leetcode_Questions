// Given an input string s, reverse the order of the words.
// A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.
// Return a string of the words in reverse order concatenated by a single space.
 
// Example 1:
// Input: s = "the sky is blue"
// Output: "blue is sky the"

// Example 2:
// Input: s = "  hello world  "
// Output: "world hello"

// Example 3:
// Input: s = "a good   example"
// Output: "example good a"

var reverseWords = function(s){
    const reverse = s.trim().split(/\s+/).reverse().join(' ');
    return reverse;
}
console.log(reverseWords("the sky is blue"));
console.log(reverseWords("  hello world  "));
console.log(reverseWords("a   good    example"));


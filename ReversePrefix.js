// Given a 0-indexed string word and a character ch, reverse the segment of word that starts at index 0 and ends at the index of the first occurrence of ch (inclusive). If the character ch does not exist in word, do nothing.

// Example 1:
// Input: word = "abcdefd", ch = "d"
// Output: "dcbaefd"
// Explanation: The first occurrence of "d" is at index 3. 
// Reverse the part of word from 0 to 3, the resulting string is "dcbaefd".

// Example 2:
// Input: word = "xyxzxe", ch = "z"
// Output: "zxyxxe"

var reversePrefix = function(word, ch){
    const index = word.indexOf(ch);
    if(index === -1){
        return word;
    }
    const reverse = word.slice(0, index+1).split("").reverse().join("");
    const rest = word.slice(index+1);
    
    return reverse + rest;
}
console.log(reversePrefix("abcdefd", "d"));
console.log(reversePrefix("xyxzxe", "z"));
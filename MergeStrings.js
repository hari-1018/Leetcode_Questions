// You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.
// Return the merged string.

// Example 1:
// Input: word1 = "abc", word2 = "pqr"
// Output: "apbqcr"

// Example 2:
// Input: word1 = "ab", word2 = "pqrs"
// Output: "apbqrs"

var mergeString = function(word1, word2){
    let merged = [];
    let i=0;

    while(i < word1.length || i < word2.length){
        if(i < word1.length){
            merged.push(word1[i]);
        }
        if(i < word2.length){
            merged.push(word2[i]);
        }
        i++;
    }
    return merged.join('');
}
const result = mergeString("abc","pqr")
console.log(result);
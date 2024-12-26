// Given a string s, return true if s is a good string, or false otherwise.
// A string s is good if all the characters that appear in s have the same number of occurrences (i.e., the same frequency).

// Example 1:
// Input: s = "abacbc"
// Output: true

// Example 2:
// Input: s = "aaabb"
// Output: false

var equalOccurence = function(s){
    const count ={};
    for(const letter of s){
        count[letter] = (count[letter]||0) + 1;
    }
    const occurence = new Set(Object.values(count));
    if(occurence.size===1){
        return true;
    }else{
        return false;
    }
}
console.log(equalOccurence("abacbc"));
console.log(equalOccurence("aaabb"));
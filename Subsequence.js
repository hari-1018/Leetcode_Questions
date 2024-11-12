// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
// A subsequence of a string is a new string that is formed from the original string by deleting some of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

// Example 1:
// Input: s = "abc", t = "ahbgdc"
// Output: true

// Example 2:
// Input: s = "axc", t = "ahbgdc"
// Output: false
 
var isSubsequence = (s,t) =>{
    let sub = 0;
    if(s.length > t.length){
        return false;
    }
    for(let i=0; i<t.length; i++){
        if(s[sub]===t[i]){
            sub++;
        }
    }
    return sub === s.length;
}
console.log(isSubsequence("abc","ahbgdc"));
console.log(isSubsequence("axc","ahbgdc"));
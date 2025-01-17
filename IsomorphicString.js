// Given two strings s and t, determine if they are isomorphic.
// Two strings s and t are isomorphic if the characters in s can be replaced to get t.
// All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

// Example 1:
// Input: s = "egg", t = "add"
// Output: true

// Example 2:
// Input: s = "foo", t = "bar"
// Output: false

var isIsomorphic = function(s,t){
    if(s.length !== t.length){
        return false;
    }
    for(i=0;i<s.length;i++){
        if(s.indexOf(s[i],i+1) !== t.indexOf(t[i],i+1)){
            return false;
        }
    }
    return true;
}
console.log(isIsomorphic("egg","add"));
console.log(isIsomorphic("foot","ball"));
console.log(isIsomorphic("foo","bar"));
console.log(isIsomorphic("paper","title"));
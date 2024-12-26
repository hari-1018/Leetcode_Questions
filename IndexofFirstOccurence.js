// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Example 1:
// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0

// Example 2:
// Input: haystack = "leetcode", needle = "leeto"
// Output: -1

var strStr = function(haystack, needle){
return haystack.indexOf(needle);
};

console.log(strStr("sadbutsad", "sad"));
console.log(strStr("leetcode","leeto"));

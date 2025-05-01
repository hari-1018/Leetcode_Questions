// Given a string s, return the number of segments in the string.
// A segment is defined to be a contiguous sequence of non-space characters.

// Example 1:
// Input: s = "Hello, my name is John"
// Output: 5
// Explanation: The five segments are ["Hello,", "my", "name", "is", "John"]

// Example 2:
// Input: s = "Hello"
// Output: 1

var countSegments = function(s) {
    if (s.trim() === "") return 0;
    return s.trim().split(/\s+/).length;
};
console.log(countSegments("Hello, my name is John"));
console.log(countSegments("Hello"));
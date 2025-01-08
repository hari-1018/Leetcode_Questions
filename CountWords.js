// Given two string arrays words1 and words2, return the number of strings that appear exactly once in each of the two arrays.

 

// Example 1:
// Input: words1 = ["leetcode","is","amazing","as","is"], words2 = ["amazing","leetcode","is"]
// Output: 2
// Explanation:
// - "leetcode" appears exactly once in each of the two arrays. We count this string.
// - "amazing" appears exactly once in each of the two arrays. We count this string.
// - "is" appears in each of the two arrays, but there are 2 occurrences of it in words1. We do not count this string.
// - "as" appears once in words1, but does not appear in words2. We do not count this string.
// Thus, there are 2 strings that appear exactly once in each of the two arrays.
// Example 2:

// Input: words1 = ["b","bb","bbb"], words2 = ["a","aa","aaa"]
// Output: 0

// Example 3:
// Input: words1 = ["a","ab"], words2 = ["a","a","a","ab"]
// Output: 1


var countWords = function(words1, words2) {
    let count = 0;
    for (let i = 0; i < words1.length; i++) {

        const word = words1[i];
        const isUniqueInWords1 = words1.indexOf(word) === words1.lastIndexOf(word);
        const isInWords2 = words2.indexOf(word) >= 0;
        const isUniqueInWords2 = words2.indexOf(word) === words2.lastIndexOf(word);

        if (isUniqueInWords1 && isInWords2 && isUniqueInWords2) {
            count++;
        }
    }

    return count;
};
console.log(countWords(["leetcode","is","amazing","as","is"], ["amazing","leetcode","is"]));
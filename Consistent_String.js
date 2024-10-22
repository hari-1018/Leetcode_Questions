
        // You are given a string allowed consisting of distinct characters and an array of strings words. A string is consistent if all characters in the string appear in the string allowed.
        // Return the number of consistent strings in the array words.

        // Example 1:
        // Input: allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
        // Output: 2

        // Example 2:
        // Input: allowed = "abc", words = ["a","b","c","ab","ac","bc","abc"]
        // Output: 7

var countConsistentStrings = function(allowed, words) {
    const uniqueAllowed = new Set(allowed);
    let count = 0;
    for(const word of words)
    {
        const uniqueWords = new Set(word);
        if([...uniqueWords].every(char=>uniqueAllowed.has(char)))
        {
            count++;
        }
    }
    return count;
};
console.log(countConsistentStrings("ab", ["ad","bd","aaab","baa","badab"]));
console.log(countConsistentStrings("abc", ["a","b","ac","ab","c","bc","abc","cba"]));

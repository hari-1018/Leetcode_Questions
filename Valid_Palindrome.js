        // Given a string s, return true if it is a palindrome, considering only alphanumeric characters and ignoring case.
        
        // Example 1:
        // Input: s = "A man, a plan, a canal: Panama"
        // Output: true
        // Example 2:
        // Input: s = "race a car"
        // Output: false

    var isPalindrome = function(s) 
    {
    if(s === '')
    {
        return true;
    }
    const inputString = s.toLowerCase().replace(/[^a-z0-9]/g,'');
    const reversedString = inputString.split('').reverse().join('');
    return inputString === reversedString;
    };
    console.log(isPalindrome("A man, a plan, a canal: Panama"));
    console.log(isPalindrome("race a car"));

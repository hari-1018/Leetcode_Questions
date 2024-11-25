
        // Given an integer x, return true if it is a palindrome.

        // Example 1:
        // Input: x = 121
        // Output: true

        // Example 2:
        // Input: x = -121
        // Output: false
        
        var isPalindrome = function(x)
        {
            let str = x.toString();
            let split = str.split('');
            let reversed = split.reverse();
            let joined = reversed.join('');  
            if(str === joined){
                return true;
            }
            return false;
        }
        
        console.log(isPalindrome(121)); 

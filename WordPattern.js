        // Given a pattern and a string s, return true if s follows the same pattern.
        // The pattern consists of lowercase English letters and digits.
        // The string consists of lowercase English letters, digits, and spaces.
        // A word is defined as a sequence of non-space characters.
        // Example 1:
        // Input: pattern = "abba", s = "dog cat cat dog"
        // Output: true
        // Example 2:
        // Input: pattern = "abba", s = "dog cat cat fish"
        // Output: false

        var wordPattern = function(pattern, s) {
            let patternArray = pattern.split("");
            let words = s.split(" ");
            if (patternArray.length!== words.length) {
                return false;
            }
            let map = new Map();
            for (let i = 0; i < patternArray.length; i++) {
                if (!map.has(patternArray[i])) {
                    if (words.some(word => word === map.get(words[i]))) {
                        return false;
                    }
                    map.set(patternArray[i], words[i]);
                } else if (map.get(patternArray[i])!== words[i]) {
                    return false;
                }
    
        }
        return true;
    }
        
        console.log(wordPattern("abba", "dog cat cat dog")); 
        console.log(wordPattern("abba", "dog cat cat fish")); 

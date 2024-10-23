        // Given a list of strings words, return all words that can be typed using letters of the alphabet on only one row of a keyboard.
        // the first row consists of the characters "qwertyuiop",
        // the second row consists of the characters "asdfghjkl", and
        // the third row consists of the characters "zxcvbnm".

        // Example 1:
        // Input: words = ["Hello","Alaska","Dad","Peace"]
        // Output: ["Alaska","Dad","Peace"]

        // Example 2:
        // Input: words = ["omk"]
        // Output: []

        // Example 3:
        // Input: words = ["adsdf","sfd"]
        // Output: ["adsdf","sfd"]

        var findWords = function(words) {
            const keyboardRows = ['qwertyuiop','asdfghjkl','zxcvbnm'];
            const result = [];

            for(let word of words)
            {
                const lower = word.toLowerCase();
                let row = keyboardRows.find(row => row.includes(lower[0]));
                if(lower.split('').every(char => row.includes(char)))
                {
                    result.push(word);
                }

            }
            return result;
        }
        console.log(findWords(["Hello","Alaska","Dad","Peace"]));

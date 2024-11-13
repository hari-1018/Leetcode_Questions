var reverseVowels = function(s) {
    const word = s.split('');
    const vowels = new Set(['a','e','i','o','u','A','E','I','O','U']);
    const ifVowel = word.filter(char => vowels.has(char)); 
    const reverse = ifVowel.reverse(); 
    let vowelIndex = 0;
    for (let i = 0; i < word.length; i++) {
        if (vowels.has(word[i])) {
            word[i] = reverse[vowelIndex]; 
            vowelIndex++;
        }
    }
    
    return word.join(''); 
}

console.log(reverseVowels("Icecream")); 

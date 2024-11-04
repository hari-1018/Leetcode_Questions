var isValid = function(word) {
    if(word.length < 3 || !/^[a-zA-Z0-9]+$/.test(word)){
        return false;
    }
    const vowel = /[aeiouAEIOU]/.test(word);
    const consonant = /[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/.test(word);

    return vowel && consonant;
};
console.log(isValid('234Adas'));
console.log(isValid('b3'));
// You are given a string title consisting of one or more words separated by a single space, where each word consists of English letters. Capitalize the string by changing the capitalization of each word such that:

// If the length of the word is 1 or 2 letters, change all letters to lowercase.
// Otherwise, change the first letter to uppercase and the remaining letters to lowercase.
// Return the capitalized title.


// Example 1:
// Input: title = "capiTalIze tHe titLe"
// Output: "Capitalize The Title"

// Example 2:
// Input: title = "First leTTeR of EACH Word"
// Output: "First Letter of Each Word"

var capitalizeTitle = function(title){
    let text = title.toLowerCase();
    let split = text.split(' ');
    let changeTitle = split.map(word => {
        if(word.length<=2){
            return word.toLowerCase();
        }else{
            return word[0].toUpperCase() + word.slice(1);
        }
    })
    return changeTitle.join(' ');
}
console.log(capitalizeTitle("capiTalIze tHe titLe"));
console.log(capitalizeTitle("First leTTeR Of EACH Word"));
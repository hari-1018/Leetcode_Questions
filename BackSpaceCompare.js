// Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.
// Note that after backspacing an empty text, the text will continue empty.

// Example 1:
// Input: s = "ab#c", t = "ad#c"
// Output: true

// Example 2:
// Input: s = "ab##", t = "c#d#"
// Output: true

var backspaceCompare = function(s, t) {
    let new_S = [];
    let new_T = [];

    for(let i of s){
        if(i !== '#'){
            new_S.push(i);
        }else{
            new_S.pop();
        }
    }

    for(let j of t){
        if(j !== '#'){
            new_T.push(j);
        }else{
            new_T.pop();
        }
    }
    return new_S.join('') === new_T.join('');
};
console.log(backspaceCompare("ab#c","ad#c"));
console.log(backspaceCompare("ab##","d#c#"));
console.log(backspaceCompare("ab#","ad"));
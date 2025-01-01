// You are given a string s consisting of lowercase English letters, and an integer k. Your task is to convert the string into an integer by a special process, and then transform it by summing its digits repeatedly k times. More specifically, perform the following steps:

// Convert s into an integer by replacing each letter with its position in the alphabet (i.e. replace 'a' with 1, 'b' with 2, ..., 'z' with 26).
// Transform the integer by replacing it with the sum of its digits.
// Repeat the transform operation k times in total.

// Example 1:
// Input: s = "iiii", k = 1
// Output: 36
// Explanation:
// The operations are as follows: "iiii" ➝ "(9)(9)(9)(9)" ➝ "9999" ➝ 9999
//                                 Transform #1: 9999 ➝ 9 + 9 + 9 + 9 ➝ 36
//                                 Thus the resulting integer is 36.
                                
// Example 2:
// Input: s = "leetcode", k = 2
// Output: 6
// Explanation:
// The operations are as follows: "leetcode" ➝ "(12)(5)(5)(20)(3)(15)(4)(5)" ➝ "12552031545" ➝ 12552031545
//                                 Transform #1: 12552031545 ➝ 1 + 2 + 5 + 5 + 2 + 0 + 3 + 1 + 5 + 4 + 5 ➝ 33    
//                                 Transform #2: 33 ➝ 3 + 3 ➝ 6
//                                 Thus the resulting integer is 6.


var sumOfLetters = function(s,k){
    let convert=s.split("").map(char=> char.charCodeAt(0)-96).join("");
    for(let i=0;i<k;i++){
        convert = convert.split('').reduce((a,b)=> a + parseInt(b), 0).toString();
    }
    return parseInt(convert);
}
console.log(sumOfLetters("iiii",1));
console.log(sumOfLetters("leetcode",2))
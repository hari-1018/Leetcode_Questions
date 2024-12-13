// Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.
// Example 1:
// Input: num = 38
// Output: 2
// 38 --> 3 + 8 --> 11
// 11 --> 1 + 1 --> 2 

// Example 2:
// Input: num = 0
// Output: 0

function addDigits(num){
    if(num > 0){
        return 1 + (num-1) % 9;
    }
    else{
        return 0;
    }
}
console.log(addDigits(38));
console.log(addDigits(0));
console.log(addDigits(1));       

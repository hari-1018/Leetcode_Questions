// There is a programming language with only four operations and one variable X:

// ++X and X++ increments the value of the variable X by 1.
// --X and X-- decrements the value of the variable X by 1.
// Initially, the value of X is 0.

// Given an array of strings operations containing a list of operations, return the final value of X after performing all the operations.


// Example 1:
// Input: operations = ["--X","X++","X++"]
// Output: 1

// Example 2:
// Input: operations = ["++X","++X","X++"]
// Output: 3

// Example 3:
// Input: operations = ["X++","++X","--X","X--"]
// Output: 0

var finalValueAfterOperations = function(operations) {
    let result = 0;
    for(let operation of operations){
        if(operation === "++X" || operation === "X++"){
            result += 1;
        }else if(operation === "--X" || operation === "X--"){
            result -=1;
        }
    }    
    return result;
};
console.log(finalValueAfterOperations(["--X","X++","X++"]));
console.log(finalValueAfterOperations(["X++","++X","--X","X--"]));
console.log(finalValueAfterOperations(["++X","++X","X++"]));
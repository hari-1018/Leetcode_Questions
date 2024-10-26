// Given an integer n, return true if it is a power of 3. Otherwise, return false.

// Example 1:
// Input: n = 27
// Output: true (3^3)

// Example 2:
// Input: n = 0
// Output: false


    var isPowerOfThree = function(n) {
    if(n <= 0){
        return false;
    }
    while(n % 3 === 0){
        n = n / 3;
    }
    return n === 1;
    
};
console.log(isPowerOfThree(27));
console.log(isPowerOfThree(0));
console.log(isPowerOfThree(81));
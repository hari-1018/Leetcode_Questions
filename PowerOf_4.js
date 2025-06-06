// Given an integer n, return true if it is a power of 4. Otherwise, return false.

// Example 1:
// Input: n = 16
// Output: true (4^2)

// Example 2:
// Input: n = 5
// Output: false

    var isPowerOfFour = function(n) {
    if(n <= 0){
        return false;
    }
    while(n % 4 === 0){
        n = n / 4;
    }
    return n === 1;
    
};
console.log(isPowerOfFour(64));
console.log(isPowerOfFour(0));
console.log(isPowerOfFour(16));

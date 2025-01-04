// An ugly number is a positive integer which does not have a prime factor other than 2, 3, and 5.
// Given an integer n, return true if n is an ugly number.

// Example 1:
// Input: n = 6
// Output: true

// Example 2:
// Input: n = 1
// Output: true

// Example 3:
// Input: n = 14
// Output: false

var isUgly = function(n) {
    if (n <= 0) return false; 

    while (n % 2 === 0) n /= 2;
    while (n % 3 === 0) n /= 3;
    while (n % 5 === 0) n /= 5;

    return n === 1;
};

console.log(isUgly(6)); 
console.log(isUgly(1)); 
console.log(isUgly(14));

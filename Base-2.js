// Given an integer n, return a binary string representing its representation in base -2.
// Note that the returned string should not have leading zeros unless the string is "0".

// Example 1:
// Input: n = 2
// Output: "110"

// Example 2:
// Input: n = 3
// Output: "111"

var baseNeg2 = function(n) {
    if (n === 0) {
        return "0";
    }
    let result = "";
    while (n !== 0) {
        let remainder = n % -2;
        n = Math.floor(n / -2);

        if (remainder < 0) {
            remainder += 2;
            n += 1;
        }
        result = remainder + result;
    }
    return result;
};

console.log(baseNeg2(2)); // Should output "110"
console.log(baseNeg2(3)); // Should output "111"

// Given an integer array nums, return the greatest common divisor of the smallest number and largest number in nums.
// The greatest common divisor of two numbers is the largest positive integer that evenly divides both numbers.

// Example 1:
// Input: nums = [2,5,6,9,10]
// Output: 2

// Example 2:
// Input: nums = [7,5,6,8,3]
// Output: 1

// Example 3:
// Input: nums = [3,3]
// Output: 3

var findGCD = function(nums){
    const min = Math.min(...nums);
    const max = Math.max(...nums);

    const gcd = (min,max)=>(max === 0 ? min : gcd(max,min % max))
    return gcd(min,max);
}
console.log(findGCD([2,5,6,9,10]));
console.log(findGCD([7,5,6,8,3]));
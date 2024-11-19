// Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
 
// Example 1:
// Input: nums = [3,2,3]
// Output: 3

// Example 2:
// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

var majorityElement = function(nums) {
    const n = nums.length;
    const sorted = nums.sort((a,b)=> a-b);
    const result = sorted[Math.floor(n/2)];
    return result;

};
console.log(majorityElement([3,2,3]));
console.log(majorityElement([2,2,1,1,1,2,2]));
// Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).
// Specifically, ans is the concatenation of two nums arrays.
// Return the array ans.

// Example 1:
// Input: nums = [1,2,1]
// Output: [1,2,1,1,2,1]

// Example 2:
// Input: nums = [1,3,2,1]
// Output: [1,3,2,1,1,3,2,1]

var concatArray = (nums) => {
    let result = nums.concat(nums);
    console.log(result);
}
concatArray([1,2,1]);
concatArray([2,3,4]);
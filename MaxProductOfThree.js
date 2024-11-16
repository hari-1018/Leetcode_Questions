// Given an integer array nums, find three numbers whose product is maximum and return the maximum product.

// Example 1:
// Input: nums = [1,2,3]
// Output: 6

// Example 2:
// Input: nums = [1,2,3,4]
// Output: 24

// Example 3:
// Input: nums = [-1,-2,-3]
// Output: -6

var maxProduct = function(nums){
    const sorted = nums.sort((a,b)=> a-b);
    const n = nums.length;
    const result = Math.max(
        nums[n-1] * nums[n-2] * nums[n-3],
        nums[0] * nums[1] * nums[n-1],
        )
    return result;
}
console.log(maxProduct([1,2,3,4]))
console.log(maxProduct([-1,-2,-3]))
console.log(maxProduct([-100,-98,-1,2,3,4]))
// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

// Example 1:
// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]

// Example 2:
// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]

var rotate = function(nums,k){
    k = k % nums.length;
    if(k ==0){
        return nums;
    }
    const split = nums.splice(nums.length - k);
    nums.unshift(...split);
    return nums;
}
console.log(rotate([1,2,3,4,5,6,7], 3));
console.log(rotate([-1,-100,3,99], 2));
// Given an integer array nums, return the third distinct maximum number in this array. If the third maximum does not exist, return the maximum number.

// Example 1:
// Input: nums = [3,2,1]
// Output: 1

// Example 2:
// Input: nums = [1,2]
// Output: 2 //The third distinct maximum does not exist, so the maximum (2) is returned instead.

// Example 3:
// Input: nums = [2,2,3,1]
// Output: 1

var thirdMax = function(nums){
    let sorted = nums.sort((a, b)=> b-a);
    let unique = [...new Set(sorted)];
    if(unique.length < 3){
        return unique[0];
    }   
    return unique[2];
}
console.log(thirdMax([2,2,3,1]));
console.log(thirdMax([1,2]));

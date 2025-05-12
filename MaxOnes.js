// Given a binary array nums, return the maximum number of consecutive 1's in the array.

// Example 1:
// Input: nums = [1,1,0,1,1,1]
// Output: 3

// Example 2:
// Input: nums = [1,0,1,1,0,1]
// Output: 2

var findMaxConsecutiveOnes = function(nums) {
    let count = 0;
    let maxCount = 0;
    for(let i=0; i<=nums.length;i++){
        if(nums[i] === 1){
            count++;
            if(count > maxCount){
                maxCount = count;
            }
        } else {
            count = 0;
        }
    }
    console.log(maxCount);
};
findMaxConsecutiveOnes([1,1,0,1,1,1])
findMaxConsecutiveOnes([1,1,0,1,1,0,1,1,1,1])
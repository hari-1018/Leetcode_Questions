// Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

// Example 1:
// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [5,6]

// Example 2:
// Input: nums = [1,1]
// Output: [2]

var disappearNum = function(nums)
{
    const n = nums.length;
    const uniqueNums = new Set(nums);
    const disappear = [];
    for(let i=1; i<=n; i++)
    {
        if(!uniqueNums.has(i)){
            disappear.push(i);
        }
    }
    return disappear;
}
console.log(disappearNum([4,3,2,7,8,2,3,1]));
console.log(disappearNum([1,1]));


// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.


    var twoSum = function(nums, target) 
    {
        for(let i=0; i<nums.length; i++)
        {
            for(j=i+1; j<nums.length; j++)
            {
                if(nums[i]+nums[j] == target)
                {
                    return [i,j]
                }
            }
        }
        return [];
    };

    var nums = [2,4,6,8,11];
    var target = 14;
    console.log(twoSum(nums,target));
    
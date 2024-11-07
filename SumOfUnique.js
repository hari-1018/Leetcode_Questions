// You are given an integer array nums. The unique elements of an array are the elements that appear exactly once in the array.
// Return the sum of all the unique elements of nums.

// Example 1:
// Input: nums = [1,2,3,2]
// Output: 4

// Example 2:
// Input: nums = [1,1,1,1,1]
// Output: 0

var uniqueSum = function(nums){
    let sum=0;
    for(const num of nums){
        if(nums.indexOf(num) === nums.lastIndexOf(num)){
            sum += num;
        }
    }
    return sum;
}
console.log(uniqueSum([1,2,3,4,5]));
console.log(uniqueSum([1,1,1,1]));
console.log(uniqueSum([1,2,3,2]))
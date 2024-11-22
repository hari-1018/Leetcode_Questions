// You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set, which results in repetition of one number and loss of another number.

// You are given an integer array nums representing the data status of this set after the error.

// Find the number that occurs twice and the number that is missing and return them in the form of an array.

// Example 1:
// Input: nums = [1,2,2,4]
// Output: [2,3]

// Example 2:
// Input: nums = [1,1]
// Output: [1,2]

var findErrorNums = function(nums){
    const n = nums.length;
    const sumOfN_Nums = (n*(n+1)) / 2;

    const unique = [...new Set(nums)];
    const uniqueSum =  unique.reduce((sum, num) => sum + num, 0);
    const actualSum = nums.reduce((sum, num)=> sum + num, 0);

    const duplicateNum = actualSum - uniqueSum;
    const missingNum = sumOfN_Nums - uniqueSum;

    return [duplicateNum, missingNum];

}
console.log(findErrorNums([1,2,2,4]));
console.log(findErrorNums([1,1]));
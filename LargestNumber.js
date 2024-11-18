// Given a list of non-negative integers nums, arrange them such that they form the largest number and return it.

// Example 1:
// Input: nums = [10,2]
// Output: "210"

// Example 2:
// Input: nums = [3,30,34,5,9]
// Output: "9534330"

var largestNumber = function(nums){
    const numbers = nums.map(String);
    const largest = numbers.sort((a,b)=> (b+a) - (a+b));
    const result = largest.join('');
    if(result === "00"){
        return "0";
    }
    return result;
}
console.log(largestNumber([10,2]))
console.log(largestNumber([0,0]))
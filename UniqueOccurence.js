// Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.

// Example 1:
// Input: arr = [1,2,2,1,1,3]
// Output: true

// Example 2:
// Input: arr = [1,2]
// Output: false

// Example 3:
// Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
// Output: true

var uniqueOccurence = (arr) => {
    const unique = [...new Set(arr)];
    if(unique!=arr){
        return true;
    }
    return false;
}

console.log(uniqueOccurence([1,2,2,1,1,3]));
console.log(uniqueOccurence([1,2]));



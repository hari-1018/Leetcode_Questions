// Given an array arr and a chunk size size, return a chunked array.

// A chunked array contains the original elements in arr, but consists of subarrays each of length size. The length of the last subarray may be less than size if arr.length is not evenly divisible by size.

// Example 1:
// Input: arr = [1,2,3,4,5], size = 1
// Output: [[1],[2],[3],[4],[5]]

// Example 2:
// Input: arr = [1,9,6,3,2], size = 3
// Output: [[1,9,6],[3,2]]

        const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const size = 2;
        var chunkArray = function(arr, size) {
            if(arr.length===0)
            return []; 

            let result=[];
            for(let i=0; i<arr.length; i+=size){
                result.push(arr.slice(i, i+size));
            }
            return result;
        };
        console.log(chunkArray(arr, size));
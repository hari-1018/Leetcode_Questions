// Given an array arr and a function fn, return a sorted array sortedArr. You can assume fn only returns numbers and those numbers determine the sort order of sortedArr. sortedArray must be sorted in ascending order by fn output.

var sortBy = function(arr, fn) 
{
    return arr.sort((a,b)=> fn(a)-fn(b));
};
const arr = [5, 4, 1, 2, 3];
const fn = (x) => x;
console.log(sortBy(arr, fn));
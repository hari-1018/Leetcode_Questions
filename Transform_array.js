// Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element. The returned array should be created such that returnedArray[i] = fn(arr[i], i).

var map = function(arr, fn) 
{
    for(let i=0;i<arr.length;i++)
    {
    arr[i]=fn(arr[i],i);
    }
    return arr;
};

function plusOne(n, index) 
{
    return n + 1;
}

let array = [1, 2, 3];
let new_array = map(array, plusOne);

console.log(new_array);
// Given a multi-dimensional array arr and a depth n, return a flattened version of that array.

// A multi-dimensional array is a recursive data structure that contains integers or other multi-dimensional arrays.

// A flattened array is a version of that array with some or all of the sub-arrays removed and replaced with the actual elements in that sub-array. This flattening operation should only be done if the current depth of nesting is less than n. The depth of the elements in the first array are considered to be 0.

var flat = function (arr, n) 
{
    if(n==0) return arr;
    var ans = [];
    for(var i=0; i<arr.length; i++)
    {
        if(Array.isArray(arr[i]))
        {
        ans.push(...flat(arr[i], n-1));
        } 
        else 
        {
        ans.push(arr[i]);
        }
    }
    return ans;
};

var arr = [1,2,3,[4,5,6],[7,8,[9,10,11],12],[13,14,15]];
var n=2;

console.log(flat(arr, n));

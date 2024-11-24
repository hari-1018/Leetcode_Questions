// Given an object or an array, return if it is empty.
// An empty object contains no key-value pairs.
// An empty array contains no elements.

var isEmpty = function(obj) {
return Object.keys(obj).length == 0;
};

console.log(isEmpty({})); 
console.log(isEmpty({ a: 1 }));


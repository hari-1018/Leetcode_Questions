// Given a function fn, return a memoized version of that function.

// A memoized function is a function that will never be called twice with the same inputs. Instead it will return a cached value.

// You can assume there are 3 possible input functions: sum, fib, and factorial.

// sum accepts two integers a and b and returns a + b. Assume that if a value has already been cached for the arguments (b, a) where 
// a != b, it cannot be used for the arguments (a, b). For example, if the arguments are (3, 2) and (2, 3), two separate calls should be made.

function memoize(fn) 
{
const cache = {};
return function(...args) 
{
const key = JSON.stringify(args);
if (key in cache) 
{
return cache[key];
}
const result = fn.apply(this, args);
cache[key] = result;
return result;
}
}

const Sum = memoize(function(a, b) {
return a + b;
});

console.log(Sum(2, 3));
console.log(Sum(2, 3));
console.log(Sum(2, 8));

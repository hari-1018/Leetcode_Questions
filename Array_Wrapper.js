

// Create a class ArrayWrapper that accepts an array of integers in its constructor. This class should have two features:

// When two instances of this class are added together with the + operator, the resulting value is the sum of all the elements in both arrays.
// When the String() function is called on the instance, it will return a comma separated string surrounded by brackets. For example, [1,2,3].

var ArrayWrapper = function(nums) {
this.nums = nums;

this.valueOf = function() {
return this.nums.reduce((sum, num) => sum + num, 0);
};

this.toString = function() {
return `[${this.nums.join(',')}]`;
};
};

const nums1 = new ArrayWrapper([1, 5]);
const nums2 = new ArrayWrapper([3, 4]);
const result = nums1 + nums2;
console.log(result);

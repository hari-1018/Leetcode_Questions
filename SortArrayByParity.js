var sortArrayByParity = function(nums) {
    const even = nums.filter(nums => nums % 2 === 0)
    const odd = nums.filter(nums => nums % 2 !== 0)
    const result = even.concat(odd);
    return result;
    
};
console.log(sortArrayByParity([3,1,2,4]));
console.log(sortArrayByParity([3,5,8,1,2,4]));
console.log(sortArrayByParity([0]));


var moveZeroes = function(nums){
    let nonZero = 0;
    for(let i=0; i< nums.length;i++){
        if(nums[i] !== 0){
            [nums[nonZero], nums[i]] = [nums[i], nums[nonZero]];
            nonZero++;
        }
    }
    return nums;
};
console.log(moveZeroes([0,1,0,3,12]));


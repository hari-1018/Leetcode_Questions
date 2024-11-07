var uniqueSum = function(nums){
    let sum=0;
    for(const num of nums){
        if(nums.indexOf(num) === nums.lastIndexOf(num)){
            sum += num;
        }
    }
    return sum;
}
console.log(uniqueSum([1,2,3,4,5]));
console.log(uniqueSum([1,1,1,1]));
console.log(uniqueSum([1,2,3,2]))
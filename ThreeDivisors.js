// Given an integer n, return true if n has exactly three positive divisors. Otherwise, return false.
// An integer m is a divisor of n if there exists an integer k such that n = k * m.


// Example 1:
// Input: n = 2
// Output: false

// Example 2:
// Input: n = 4
// Output: true

var isThree = function(n){
    let count = 0;
    for(let i=1; i<=n;i++){
        if(count <= 3){
            if(n % i === 0){
                count ++;
            }
            if(count > 3){
            return false;
            }
        }
    }
    return count === 3;
}
console.log(isThree(2));
console.log(isThree(4));
console.log(isThree(5));

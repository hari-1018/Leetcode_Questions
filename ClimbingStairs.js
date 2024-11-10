// You are climbing a staircase. It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

// Example 1:
// Input: n = 2
// Output: 2

// Example 2:
// Input: n = 3
// Output: 3

var climbStairs = function(n) {
    if(n<=2){
        return n;
    }
    let twostep = 2;
    let onestep = 1;
    let steps = 0;

    for(let i=3; i<=n; i++){
        steps = twostep + onestep;
        onestep = twostep;
        twostep = steps;
    }
    return steps;
};
const result = climbStairs(6);
console.log(result)
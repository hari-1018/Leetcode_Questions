// Given an integer n, add a dot (".") as the thousands separator and return it in string format.

// Example 1:
// Input: n = 987
// Output: "987"

// Example 2:
// Input: n = 1234
// Output: "1.234"

var thousandSeperator = (n) =>{
    n = String(n);
    n = n.split('');
    if(n.length > 3){
        for(let i=n.length-3; i>0;i-=3){
            n.splice(i,0,".")
        }
    }
    n = n.join("");
    console.log(n);
}
thousandSeperator(1234);
thousandSeperator(987);
thousandSeperator(98765432);
 
var isPerfectSquare = function(num){
    const root = Math.sqrt(num);
    const perfect = Math.floor(root);
    if(root === perfect){
        return true;
    }
    return false;
}
console.log(isPerfectSquare(14));
console.log(isPerfectSquare(16));
console.log(isPerfectSquare(25));
console.log(isPerfectSquare(20));




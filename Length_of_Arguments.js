// Write a function argumentsLength that returns the count of arguments passed to it.


var argumentsLength = function(...args) {
   let count=0;
   for(let i=0;i<args.length;i++)
   {
    count++;
   } 
   return count;
};
console.log(argumentsLength(5,10,15));
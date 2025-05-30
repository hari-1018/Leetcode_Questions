// Write a function createCounter. It should accept an initial integer init. It should return an object with three functions. The three functions are:
// => increment() increases the current value by 1 and then returns it.
// => decrement() reduces the current value by 1 and then returns it.
// => reset() sets the current value to init and then returns it.

var createCounter = function(init) {
    let start_with = init;
    return {
        increment:() =>  ++start_with,
        reset:() => start_with=init,
        decrement:()=> --start_with
         }
    
};
 const counter = createCounter(5)
 let increment = counter.increment();
 let reset = counter.reset();
 let decrement = counter.decrement();
 
 console.log(increment);
 console.log(reset);
 console.log(decrement);

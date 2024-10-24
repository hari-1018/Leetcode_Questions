// Given a function fn, an array of arguments args, and a timeout t in milliseconds, return a cancel function cancelFn.
// After a delay of cancelTimeMs, the returned cancel function cancelFn will be invoked.setTimeout(cancelFn, cancelTimeMs)

// Initially, the execution of the function fn should be delayed by t milliseconds.

// If, before the delay of t milliseconds, the function cancelFn is invoked, it should cancel the delayed execution of fn. Otherwise, if cancelFn is not invoked within the specified delay t, fn should be executed with the provided args as arguments.

        var cancellable = function(fn, args, t) {
        const t1 = setTimeout(()=>fn(...args), t);
        return () => clearTimeout(t1)
    
};
const fn = (x) => x * 5;
const args = [2], t = 20, cancelTimeMs = 50;
const cancel = cancellable(fn, args, t);

setTimeout(() => {
    cancel();
    console.log("Timeout Cancelled");
}, 2000);

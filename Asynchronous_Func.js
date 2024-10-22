// Given an array of asynchronous functions functions, return a new promise promise. Each function in the array accepts no arguments and returns a promise. All the promises should be executed in parallel.

// promise resolves:

// When all the promises returned from functions were resolved successfully in parallel. The resolved value of promise should be an array of all the resolved values of promises in the same order as they were in the functions. The promise should resolve when all the asynchronous functions in the array have completed execution in parallel.
// promise rejects:

// When any of the promises returned from functions were rejected. promise should also reject with the reason of the first rejection.

    var promiseAll = function(functions) {
  return new Promise((resolve, reject) => {
    const solution = [];
    let resolved = 0;
    let rejected = false;

    for (let i = 0; i < functions.length; i++) {
      functions[i]()
        .then(result => {
          if (!rejected) {
            solution[i] = result;
            resolved++;

            if (resolved === functions.length) {
              resolve(solution);
            }
          }
        })
        .catch(error => {
          if (!rejected) {
            rejected = true;
            reject(error);
          }
        });
    }
  });
};
console.log(promiseAll([ () => new Promise(resolve => setTimeout(() => resolve(4), 50)), 
    () => new Promise(resolve => setTimeout(() => resolve(10), 150)), 
    () => new Promise(resolve => setTimeout(() => resolve(16), 100))]));

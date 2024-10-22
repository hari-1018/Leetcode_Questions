
        // Write code that enhances all arrays such that you can call the array.groupBy(fn) method on any array and it will return a grouped version of the array.

// A grouped array is an object where each key is the output of fn(arr[i]) and each value is an array containing all items in the original array with that key.

// The provided callback fn will accept an item in the array and return a string key.
// The order of each value list should be the order the items appear in the array. Any order of keys is acceptable.

Array.prototype.groupBy = function(fn) {
    return this.reduce((acc, item) => {
    
        const key = fn(item);
        if (!acc[key]) {
            acc[key] = [];
        }
        acc[key].push(item);
        return acc;
    }, {});
};


const arr = [[1, 2, 3],[1, 3, 5],[1, 5, 9]];
const fn = function (list) { 
return String(list[0]); 
}
const grouped = arr.groupBy(fn);
console.log(grouped);

const animals = ['cat', 'dog', 'fish', 'cow'];
const groupedAnimals = animals.groupBy(animal => animal[0]);
console.log(groupedAnimals); 
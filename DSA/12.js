//* Write a function that takes an array of integers as input and removes any duplicate elements, returning a new array with only the unique elements.

function removeDuplicates(arr) {
  let newArr = [...new Set(arr)];
  return newArr;
}

//#Alter

// uniqueArray = a.filter(function(item, pos) {
//     return a.indexOf(item) == pos;
// })

/*
function uniq(a) {
    var seen = {};
    return a.filter(function(item) {
        return seen.hasOwnProperty(item) ? false : (seen[item] = true);
    });
}
*/

console.log(removeDuplicates([1, 2, 3, 1, 3, 5, 6, 2]));

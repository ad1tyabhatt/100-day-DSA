//* Write a function findMax that takes an array of numbers as input and returns the maximum number in the array

function findMax(arr) {
  let max = -(1 / 0);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }
  return max;
}

//! OR

function max() {
  Math.max(arr);
}

console.log(findMax([2, 5, 6, 1, 23, 6, 3, 14, 534, 12]));

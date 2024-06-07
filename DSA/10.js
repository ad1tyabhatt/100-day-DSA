//* Write a function arraAreEqual that takes two arrays arr1 and arr2 as input and returns true if the arrays are equal (i.e., contain same element in the same order)

function arraAreEqual(arr1, arr2) {
  let i = 0;
  if (arr1.length !== arr2.length) return false;
  while (i < arr1.length) {
    if (arr1[i] != arr2[i]) return false;
    i++;
  }
  return true;
}

//! alter

function alter(arr1, arr2) {
 return arr1.every((currVal, index) => currVal === arr2[index]);
}

console.log(alter([ 2, 3], [1, 2, 3]));

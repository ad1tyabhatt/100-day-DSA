//# Write a function called calculateMean that takes an array of number as input and returns the mean avg of those numbers

function calculateMean(arr) {
  const sumOfArr = arr.reduce((acc, curr) => {
    return acc + curr;
  });
  return sumOfArr/arr.length
}

console.log(calculateMean([110,-20,30]))

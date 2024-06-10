//# Write a function called isPowerOfTwo that takes an interger num as input and returns true if num is a power of two, and false otherwise.

function isPowerOfTwo(n) {
  while (n > 0) {
    n = n / 2;
    if(n==1) return true
  }
  return false
}

// console.log(parseInt(1));
console.log(isPowerOfTwo(5))

//* Write a function that takes a number as input and returns the sum of its digits

function sumOfDigits(n) {
  let a = n.toString();
  let sum = 0;
  for (let ans of a) {
    sum += parseInt(ans);
  }
  return sum;
}

function sumOfDigits2(num) {
  let sum = 0;
  for (; num > 0; num = Math.floor(num / 10)) {
    sum += num % 10;
  }
  return sum;
}

function sumOfDigits3(num) {
  return num
    .toString()
    .split("")
    .reduce((sum, digit) => sum + parseInt(digit), 0);
}

console.log(sumOfDigits(1234));

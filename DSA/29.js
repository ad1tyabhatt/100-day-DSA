//# Write a function called numberRange that generates an array containing consecutive numbers from a to b

function numberRange(a, b) {
  if (a <= b) {
    let arr = [];
    for (let i = a; i <= b; i++) {
      arr.push(i);
    }
    return arr;
  } else return "Cannot perform";
}



console.log(numberRange(11, 10));

//# Repeat a String

function repeatString(str, n) {
  let final = "";
  for (let i = 0; i < n; i++) {
    final += str;
  }
  return final;
}


//! ALter
/**
 * const repeatString = (str,num) =>{
 * return num>0 ? str.repeat(num):str
 * }
 */

console.log(repeatString("adi", 3));

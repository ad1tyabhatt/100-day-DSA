// # Write a function that takes a string as input and returns the count of vowels in that string Consider a, e, i ,o and u as vowerls

function countVowels(str) {
  let count = 0;

  let res = str.split(" ").join("");
  for (let i = 0; i < res.length; i++) {
    if (
      res[i] == "a" ||
      res[i] == "e" ||
      res[i] == "i" ||
      res[i] == "o" ||
      res[i] == "u"
    ) {
      count++;
    }
  }
  return count;
}

console.log(countVowels("Hello World"));

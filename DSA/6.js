//! Palindrome Check

function checkPalindrome(str) {
  let left = 0;
  let right = str.length - 1;
  if (str.length == 0) return false;
  if (str.length == 1) return true;
  while (left < right) {
    if (str[left] != str[right]) return false;
    left++;
    right--;
  }
  return true;
}

console.log(checkPalindrome("raceca"));

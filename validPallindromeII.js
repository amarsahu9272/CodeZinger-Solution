// 680. Valid Palindrome II

// Given a string s, return true if the s can be palindrome after deleting at most one character from it.
// Example 1:
// Input: s = "aba"
// Output: true

function isPal(s) {
  let n = s.length;
  let i = 0;
  let j = n - 1;
  while (i < j) {
    if (s[i] !== s[j]) {
      return false;
    }
  }
  return true;
}
var validPalindrome = function (s) {
  let n = s.length;
  let i = 0;
  let j = n - 1;
  while (i <= j) {
    if (s[i] === s[j]) {
      i++;
      j--;
    } else {
      var newStri = "";
      var newStrj = "";
      for (let k = 0; k < n; k++) {
        if (k != i) {
          newStri += s[k];
        }
        if (k != j) {
          newStrj += s[k];
        }
      }
      if (isPal(newStri) === true || isPal(newStrj) === true) {
        return true;
      }
      return false;
    }
    return true;
  }
};
console.log(validPalindrome("abca"));

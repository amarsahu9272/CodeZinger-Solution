// var isPalindrome = function (s) {
//   // Convert to lowercase and remove non-alphanumeric characters
//   s = s.toLowerCase().replace(/[^a-z0-9]/g, "");
//   // Check if the string is the same forwards and backwards
//   return s === s.split("").reverse().join("");
// };
// console.log(isPalindrome("A man, a plan, a canal: Panama"));

function isPalindrome(s) {
  // convert to lowercase and remove non-alphanumeric characters
  s = s.toLowerCase().replace(/[^a-z0-9]/g, "");

  // base case
  if (s.length <= 1) {
    return true;
  }

  // recursive case
  if (s[0] === s[s.length - 1]) {
    return isPalindrome(s.slice(1, s.length - 1));
  } else {
    return false;
  }
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));

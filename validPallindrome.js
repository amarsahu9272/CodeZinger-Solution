var isPalindrome = function (s) {
  // Convert to lowercase and remove non-alphanumeric characters
  s = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  // Check if the string is the same forwards and backwards
  return s === s.split("").reverse().join("");
};
console.log(isPalindrome("A man, a plan, a canal: Panama"));

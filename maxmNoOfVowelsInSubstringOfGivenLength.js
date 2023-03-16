/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

function vowels(ch) {
  if (ch == "a" || ch == "e" || ch == "i" || ch == "o" || ch == "u") {
    return true;
  }
  return false;
}
var maxVowels = function (s, k) {
  let counter = 0;
  let maxCount = 0;
  for (let i = 0; i < k; i++) {
    if (vowels(s[i])) {
      counter++;
    }
  }
  maxCount = Math.max(maxCount, counter);
  for (let i = k; i < s.length; i++) {
    if (vowels(s[i - k])) {
      counter--;
    }
    if (vowels(s[i])) {
      counter++;
    }
    maxCount = Math.max(maxCount, counter);
  }
  return maxCount;
};
console.log(maxVowels("abciiidef", k = 3))
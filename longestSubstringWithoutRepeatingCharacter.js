/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let left = 0;
  let longestSubstring = 0;
  let freq = {};
  for (let right = 0; right < s.length; right++) {
    while (freq[s[right]] === 1) {
      freq[s[left]] = 0;
      left++;
    }
    freq[s[right]] = 1;
    longestSubstring = Math.max(longestSubstring, right - left + 1);
  }
  return longestSubstring;
};

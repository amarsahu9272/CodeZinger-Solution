/**
 * @param {number[]} nums
 * @return {number}
 */
// var longestSubarray = function(nums) {

// };
function longestSubarray(nums) {
  let maxLen = 0;
  let left = 0,
    right = 0,
    zeros = 0;

  while (right < nums.length) {
    if (nums[right] === 0) {
      zeros++;
    }

    while (zeros > 1) {
      if (nums[left] === 0) {
        zeros--;
      }
      left++;
    }

    maxLen = Math.max(maxLen, right - left + 1);
    right++;
  }

  return maxLen - 1;
}

// Example usage:
// const nums = [1, 1, 0, 1];
const nums = [0,1,1,1,0,1,1,0,1];
const result = longestSubarray(nums);
console.log(result); // Output: 3



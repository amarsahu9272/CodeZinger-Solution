// Input: nums = [1,2,1,3,5,6,4]
// Output: 5
// Explanation: Your function can return either index number 1 where the peak element is 2, or index number 5 where the peak element is 6.

var findPeakElement = function (nums) {
  let l = 0;
  let r = nums.length - 1;
  let m = 0;
  while (l <= r) {
    m = Math.floor((l + r) / 2);
    if (nums[m - 1] < nums[m] && nums[m] > nums[m + 1]) {
      return m;
    } else if (nums[m + 1] > nums[m]) {
      l = m + 1;
    } else {
      r = m - 1;
    }
  }
  return m;
};

// function findPeakElement(nums) {
//     let left = 0;
//     let right = nums.length - 1;

//     while (left < right) {
//         const mid = Math.floor((left + right) / 2);
//         if (nums[mid] > nums[mid + 1]) {
//             right = mid;
//         } else {
//             left = mid + 1;
//         }
//     }

//     return left;
// }
const nums = [1, 2, 1, 3, 5, 6, 4];
console.log(findPeakElement(nums));

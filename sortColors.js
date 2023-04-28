// 75. Sort Colors
// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]

function sortColors(nums) {
  let counts = [0, 0, 0]; // initialize counts for red, white, and blue to 0
  for (let i = 0; i < nums.length; i++) {
    counts[nums[i]]++; // increment the count for the color of the current element
  }
  let index = 0;
  for (let color = 0; color <= 2; color++) {
    for (let i = 0; i < counts[color]; i++) {
      nums[index] = color; // overwrite the array with the color in the correct order
      index++;
    }
  }
  return nums
}
//====================

// var sortColors = function (nums) {
//     let i = 0
//     let l = 0
//     let r = nums.length - 1
//     while (i <= r) {
//         if (nums[i] === 1) {
//             i++
//         } else if (nums[i] === 0) {
//             let temp = nums[i]
//             nums[i] = nums[l]
//             nums[l] = temp
//             i++
//             l++
//         } else {
//             let temp = nums[i]
//             nums[i] = nums[r]
//             nums[r] = temp
//             r--
//         }
//     }
//     return nums
// };
const nums = [2,0,2,1,1,0]
console.log(sortColors([2,0,1]))
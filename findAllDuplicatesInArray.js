//Given an integer array nums of length n where all the integers of nums are in the range [1, n] and each integer appears once or twice, return an array of all the integers that appears twice.

// var findDuplicates = function (nums) {
//     const freq = {}
//     for (let val of nums) {
//         freq[val] = (freq[val] || 0) + 1
//     }
//     const result = []
//     for (let key in freq) {
//         if (freq[key] > 1) {
//             result.push(key)
//         }
//     }
//     return result
// };

function findDuplicates(nums) {
  let duplicates = [];

  for (let i = 0; i < nums.length; i++) {
    let index = Math.abs(nums[i]) - 1;
    if (nums[index] < 0) {
      duplicates.push(Math.abs(nums[i]));
    } else {
      nums[index] = -nums[index];
    }
  }

  return duplicates;
}

console.log(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]));

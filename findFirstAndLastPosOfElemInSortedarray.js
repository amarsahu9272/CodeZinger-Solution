// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]

function searchRange(nums, target) {
  let left = findBound(nums, target, true);
  let right = findBound(nums, target, false);
  return [left, right];
}

function findBound(nums, target, isLeft) {
  let lo = 0;
  let hi = nums.length - 1;
  let index = -1;
  while (lo <= hi) {
    let mid = Math.floor((lo + hi) / 2);
    if (target < nums[mid] || (isLeft && nums[mid] === target)) {
      hi = mid - 1;
    } else {
      lo = mid + 1;
    }
    if (nums[mid] === target) {
      index = mid;
    }
  }
  return index;
}

// function searchRange(nums, target) {
//   let start = -1;
//   let end = -1;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === target) {
//       if (start === -1) {
//         start = i;
//       }
//       end = i;
//     }
//   }
//   return [start, end];
// }

const nums = [5, 7, 7, 8, 8, 10],
  target = 7;
console.log(searchRange(nums, target));

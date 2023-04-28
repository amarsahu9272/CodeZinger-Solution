// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.
// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]

function triplets(a) {
  a.sort((a, b) => a - b);
  let n = a.length - 1;
  const result = [];
  for (let i = 0; i < n - 1; i++) {
    if (i > 0 && a[i] === a[i - 1]) continue;
    let j = i + 1;
    let k = n;
    while (j < k) {
      if (a[i] + a[j] + a[k] === 0) {
        result.push([a[i], a[j], a[k]]);
        j++;
        k--;
        while (j < k && a[j] === a[j - 1]) j++;
        while (j < k && a[k] === a[k - 1]) k--;
      } else if (a[i] + a[j] + a[k] < 0) {
        j++;
      } else {
        k--;
      }
    }
  }
  return result;
}
const nums = [0, 0, 0];
// const nums = [-1,0,1,2,-1,-4] //-4 -1 -1 0 1 2-sorted
// Output: [[-1,-1,2],[-1,0,1]]
console.log(triplets(nums));

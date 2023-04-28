// 560. Subarray Sum Equals K

// Input: nums = [1,1,1], k = 2
// Output: 2

// Input: nums = [1,2,3], k = 3
// Output: 2
function subarraySum(nums, k) {
  let count = 0;
  let sum = 0;
  const map = new Map();
  map.set(0, 1);

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (map.has(sum - k)) {
      count += map.get(sum - k);
    }
    if (map.has(sum)) {
      map.set(sum, map.get(sum) + 1);
    } else {
      map.set(sum, 1);
    }
  }

  return count;
}
const nums = [1, 2, 3],
  k = 3;
console.log(subarraySum(nums, k));

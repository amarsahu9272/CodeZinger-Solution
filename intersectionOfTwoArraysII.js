// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]

function intersect(nums1, nums2) {
  const freq = {};
  const result = [];

  for (const num of nums1) {
    freq[num] = (freq[num] || 0) + 1;
  }

  for (const num of nums2) {
    console.log(freq[num]);
    if (freq[num]) {
      result.push(num);
      freq[num]--;
    }
  }

  return result;
}
const nums1 = [1, 2, 2, 1];
const nums2 = [2, 2, 2, 2];
console.log(intersect(nums1, nums2));

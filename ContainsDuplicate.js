/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
// var containsNearbyDuplicate = function(nums, k) {

// };
function containsNearbyDuplicate(nums, k) {
  const map = new Map(); // create a hash table
  for (let i = 0; i < nums.length; i++) {
    if (map.has(nums[i]) && i - map.get(nums[i]) <= k) {
      // if the element exists in the hash table and the indices difference is less than or equal to k
      return true;
    } else {
      // add the element and its index to the hash table
      map.set(nums[i], i);
    }
  }
  return false; // no duplicate elements found within k distance
}

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3));

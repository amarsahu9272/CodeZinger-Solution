/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
function topKFrequent(nums, k) {
    // Step 1: create a hash table to store the frequency of each element
    const freq = {};
    for (const num of nums) {
      freq[num] = (freq[num] || 0) + 1;
    }
  
    // Step 2: create a min heap and add the k most frequent elements to it
    const heap = [];
    for (const key in freq) {
      const value = freq[key];
      heap.push([value, parseInt(key)]);
      if (heap.length > k) {
        heap.sort((a, b) => a[0] - b[0]);
        heap.shift();
      }
    }
  
    // Step 3: create a result array in descending order of frequency
    const res = [];
    while (heap.length > 0) {
      res.unshift(heap.pop()[1]);
    }
    return res;
  }
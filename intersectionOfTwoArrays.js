/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]

// function intersection(nums1, nums2) {
//     const set1 = new Set(nums1);
//     const set2 = new Set(nums2);
//     console.log(set1, set2)
//     const result = [];
//     for (const num of set1) {
//         if (set2.has(num)) {
//             result.push(num);
//         }
//     }
//     return result;
// }

//-----------------2nd method------------------

function intersection(nums1, nums2) {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);
  // const st = new Set();
  const result = [];
  let i = 0,
    j = 0;
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      i++;
    } else if (nums1[i] > nums2[j]) {
      j++;
    } else {
      // st.add(nums1[i]);
      if (!result.includes(nums1[i])) {
        result.push(nums1[i]);
      }
      i++;
      j++;
    }
  }
  // return [...st];
  return result;
}

//-----------------3nd binary search method------------------

// function intersection(nums1, nums2) {
//     nums1.sort((a, b) => a - b);
//     nums2.sort((a, b) => a - b);
//     const result = [];
//     for (let num of nums1) {
//         if (binarySearch(nums2, num) !== -1 && !result.includes(num)) {
//             result.push(num);
//         }
//     }
//     return result;
// }

// function binarySearch(nums, target) {
//     let left = 0;
//     let right = nums.length - 1;
//     while (left <= right) {
//         const mid = Math.floor((left + right) / 2);
//         if (nums[mid] === target) {
//             return mid;
//         } else if (nums[mid] < target) {
//             left = mid + 1;
//         } else {
//             right = mid - 1;
//         }
//     }
//     return -1;
// }
console.log(intersection([1, 2, 2, 1], [2, 2]));

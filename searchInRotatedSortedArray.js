// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4
// Input: nums = [4,5,6,7,0,1,2], target = 3
// Output: -1

function searchInRotatedSortedArray(arr, target) {
  let l = 0;
  let r = arr.length - 1;
  let m = 0;
  while (l <= r) {
    m = Math.floor((l + r) / 2);
    if (arr[m] === target) return m;
    if (arr[l] <= arr[m]) {
      if (target >= arr[l] && target < arr[m]) {
        r = m - 1;
      } else {
        l = m + 1;
      }
    } else {
      if (target > arr[m] && target <= arr[r]) {
        l = m + 1;
      } else {
        r = m - 1;
      }
    }
  }
  return -1;
}
console.log(searchInRotatedSortedArray([4, 5, 6, 7, 8, 0, 1, 2], 0));

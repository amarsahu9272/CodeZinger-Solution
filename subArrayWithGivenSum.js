//Function to find a continuous sub-array which adds up to a given number.
function subarraySum(arr, n, sum) {
  //your code here
  let left = 0;
  let right = 0;
  let currSum = arr[0];

  while (right < n) {
    if (currSum === sum) {
      return [left + 1, right + 1]; // 1-based indexing
    } else if (currSum < sum) {
      right++;
      currSum += arr[right];
    } else {
      currSum -= arr[left];
      left++;
    }
  }
  return [-1, -1]; // no subarray found
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 15;
let [left, right] = subarraySum(arr, 10, sum);
console.log(`[${left}, ${right}]`); // prints [2, 4]

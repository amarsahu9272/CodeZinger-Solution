
function PairDifference(arr, size, n) {
  let i = 0;
  let j = 1;
  let count = 0;
  arr.sort((a, b) => a - b);
  while (i < size && j < size) {
    if (arr[j] - arr[i] === n) {
      count++;
      j++;
      i++;
    } else if (arr[j] - arr[i] < n) {
      j++;
    } else {
      i++;
    }
  }
  return count;
}

let arr = [20, 3, 2, 5, 80];
let size = arr.length;
let n = 40;
console.log(PairDifference(arr, size, n));

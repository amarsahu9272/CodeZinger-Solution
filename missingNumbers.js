function missingNumber(arr, n) {
  let sum = 0;
  let missingNumber = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  let sumOfWhole = (n * (n + 1)) / 2;
  missingNumber = sumOfWhole - sum;
  return missingNumber;
}
console.log(missingNumber([1, 2, 4, 6, 3, 7, 8], 8));

function findClosestPair(arr1, arr2, x) {
  let i = 0;
  let j = arr2.length - 1;
  let minDiff = Infinity;
  let result = [];

  while (i < arr1.length && j >= 0) {
    const sum = arr1[i] + arr2[j];
    const diff = Math.abs(sum - x);

    if (diff < minDiff) {
      minDiff = diff;
      result = [arr1[i], arr2[j]];
    }

    if (sum < x) {
      i++;
    } else {
      j--;
    }
  }

  return result;
}


console.log(findClosestPair([1, 4, 5, 7], [10, 20, 30, 40], 32))


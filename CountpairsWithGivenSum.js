function getPairsCount(arr, n, k) {
  //code here
  const mp = new Map();
  var result = 0;
  for (let i = 0; i < n; i++) {
    let remaining = k - arr[i];
    if (mp.get(remaining)) {
      result = result + mp.get(remaining);
    }
    if (mp.has(arr[i])) {
      mp.set(arr[i], mp.get(arr[i]) + 1);
    } else {
      mp.set(arr[i], 1);
    }
  }
  return result;
}

console.log(getPairsCount([1, 5, 7, 1],4, 6));

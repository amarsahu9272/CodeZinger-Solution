function find(arr, n, x) {
  //code here
  let l = 0;
  let h = n - 1;
  let index = 0;
  let firstPos = -1;
  let lastPos = -1;
  while (l <= h) {
    let m = Math.floor((l + h) / 2);
    if (arr[m] === x) {
      firstPos = m;
      h = m - 1;
    } else if (x < arr[m]) {
      h = m - 1;
    } else {
      l = m + 1;
    }
  }
  l = firstPos;
  h = n;
  while (l <= h) {
    let m = Math.floor((l + h) / 2);
    if (arr[m] === x) {
      lastPos = m;
      l = m + 1;
    } else if (x < arr[m]) {
      h = m - 1;
    } else {
      l = m + 1;
    }
  }

  return [firstPos, lastPos];
}
console.log(find([1, 3, 5, 5, 5, 67, 123, 125], 9, 5));

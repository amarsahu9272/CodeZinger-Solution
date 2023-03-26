function removeDuplicate(arr) {
  arr = arr.sort();
  // console.log(arr)
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      continue;
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(removeDuplicate([2, 3, 4, 4, 6, 5, 5]));

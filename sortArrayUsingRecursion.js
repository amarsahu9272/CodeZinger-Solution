function sorting(arr) {
  // Base Condition
  if (arr.length === 1) {
    return;
  }

  // Induction
  let last_num = arr[arr.length - 1]; //[3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
  arr.pop();
  sorting(arr);
  insert(arr, last_num);
  return arr;
}

function insert(arr, last_num) {
  // Base Condition
  if (arr.length === 0 || arr[arr.length - 1] <= last_num) {
    arr.push(last_num);
    return;
  }

  // Induction
  let val = arr[arr.length - 1];
  arr.pop();
  insert(arr, last_num);
  arr.push(val);
}

let arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
sorting(arr);
console.log(arr); // Output: [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]

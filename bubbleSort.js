function bubbleSort(arr) {
  for (let j = 0; j < arr.length - j; j++) {
    let swap = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swap = true;
      }
    }
    if (swap === false) {
      console.log("noswap");
      break;
    }
  }
  return arr;
}
console.log(bubbleSort([1, 2, 3, 4, 5, 56]));
// console.log(bubbleSort([10, 4, 3, 50, 23, 90,1,2,3,4]));

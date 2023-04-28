//ip:1,2,3,4,5,5,5,6,6,7
//op:7    i.e :1,2,3,4,5,6,7
function uniqueElement(arr) {
  let i = 0;
  const unique = [arr[0]];
  for (let j = 0; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      //   arr[i] = arr[j];
      unique.push(arr[j]);
    }
  }
  return unique;
  //   return i+1
}
const arr = [1, 2, 3, 4, 5, 5, 5, 6, 6, 7];
console.log(uniqueElement(arr));

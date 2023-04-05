function OddPair(arr) {
  let mp = new Map();
  for (let i = 0; i < arr.length; i++) {
    // mp = (mp.get(arr[i])||0)+1
    if (mp.has(arr[i])) {
      mp.set(arr[i], mp.get(arr[i]) + 1);
    } else {
      mp.set(arr[i], 1);
    }
  }
  const result = [];
  mp.forEach((value, key) => {
    if (value & 1) { //odd 10&01=00 , 100&01=000
      result.push(key); 
    }
  });
  return result;
}
console.log(OddPair([11, 3, 4, 5, 11, 4, 5, 2, 8, 3]));

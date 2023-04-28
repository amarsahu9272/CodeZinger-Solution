function SeperateNumAndCharac(arr) {
    let number = [];
    let character = [];
    const mp = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (mp.has(arr[i])) {
      mp.set(arr[i], mp.get(arr[i]) + 1);
    } else {
      mp.set(arr[i], 1);
    }
  }
  mp.forEach((value, key) => {
    if (value < 2 && typeof key === "number") {
      number.push(key);
    }
    if (value < 2 && typeof key === "string") {
      character.push(key);
    }
  });
  return [number, character];
}

let arr = [3, 2, "a", "a", 2, 6, 9, 7, 8, 8, "c", "b", 5, "c"];
// let arr = [3, 2, "a", "a", 2, 6, 3, 9, 7, 8, 8, "c", "b", 5, "c"];
console.log(SeperateNumAndCharac(arr));

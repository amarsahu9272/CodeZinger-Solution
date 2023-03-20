// Print the following series using for loop:-

// 1,8,27,64,125,216,......n

// Input

// 125

// Output :-

// 1

// 8

// 27

// 64

// 125
function nitinTheorem(n) {
  let i = 1;
  while (i < n) {
    if (Math.pow(i, 3) > n) {
      break;
    }
    if (Math.pow(i, 3) <= n) {
      console.log(Math.pow(i, 3));
    }
    i++;
  }
}

console.log(nitinTheorem(125));

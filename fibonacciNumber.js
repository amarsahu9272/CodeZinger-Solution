/**
 * @param {number} n
 * @return {number}
 */
// var fib = function (n) {
//   if (n < 2) {
//     if (n === 0) return 0;
//     if (n === 1) return 1;
//   } else {
//     return fib(n - 1) + fib(n - 2);
//   }
// };
function fib(n) {
  let fib1 = [0, 1];
  for (let i = 2; i <= n; i++) {
    fib1[i] = fib1[i - 1] + fib1[i - 2];
  }

  return fib1[fib1.length - 3] + fib1[fib1.length - 2];
}
console.log(fib(4));

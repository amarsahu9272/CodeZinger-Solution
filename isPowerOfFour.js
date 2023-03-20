/**
 * @param {number} n
 * @return {boolean}
 */
// var isPowerOfFour = function (n) {

//     if (n === 1) return true;

//     if (n % 4 === 0) {

//         return isPowerOfFour(n / 4)
//     }
//     else { return false }

// };
// var isPowerOfFour = function (n) {

//     if (n === 0) return false;
//     while (n % 4 === 0) {
//         n /= 4;
//     }
//     return n === 1;
// };

function isPowerOfFour(n) {
  if (n <= 0) {
    return false;
  }

  const logValue = Math.log(n) / Math.log(4);

  return Number.isInteger(logValue);
}

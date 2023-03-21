var isPowerOfTwo = function (n) {
  if (n === 1) return true;

  if (n < 1 || !Number.isInteger(n)) {
    return false;
  }

  return isPowerOfTwo(n / 2);
};

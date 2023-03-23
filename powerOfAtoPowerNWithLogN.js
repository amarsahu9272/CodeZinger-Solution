function power(a, n) {
  if (n == 0) return 1;

  var x = power(a, Math.floor(n / 2));

  var ans = 1;
  if (n % 2 == 1) {
    ans = x * x;
    ans = ans * a;
  } else {
    ans = x * x;
  }
  return ans
}
console.log(power(5,2))

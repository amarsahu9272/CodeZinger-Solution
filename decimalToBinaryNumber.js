function ntob(n) {
  let str = "";
  if (n == 0 || n == 1) return n;

  let rem = n % 2;
  // str=str+rem

  return ntob(Math.floor(n / 2)) + str + rem;
}
console.log(ntob(8));

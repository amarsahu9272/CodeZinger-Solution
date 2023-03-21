function a(n) {
  if (n <= 1) return 1;
  else {
    console.log(n - 2);
    a(n - 1);
    console.log(n - 1);
    a(n - 2);
    console.log(n);
  }
}
a(5);

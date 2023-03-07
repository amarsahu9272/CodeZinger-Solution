process.stdin.resume();
process.stdin.setEncoding("ascii");

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on("data", function (data) {
  input_stdin += data;
});

process.stdin.on("end", function () {
  input_stdin_array = input_stdin.split("\n");
  main();
});

function readLine() {
  return input_stdin_array[input_currentline++];
}

function isPrime(n) {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function solution(N) {
  //Write your solution here
  if (!isPrime(N)) {
    return 0;
  }
  let digits = parseInt(N.toString().split("").reverse().join(""));
  if (!isPrime(digits)) {
    return 0;
  }
  return 1;
}

function main() {
  var N = parseInt(readLine());

  var res = solution(N);
  console.log(res);
}

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

function solution(n) {
  //Write your solution here
  if (n == 0) {
    return "No";
  }
  while (n != 1) {
    if (n % 2 != 0) {
      return "No";
    }
    n = n / 2;
  }
  return "Yes";
}

function main() {
  var n = parseInt(readLine());

  var res = solution(n);
  console.log(res);
}

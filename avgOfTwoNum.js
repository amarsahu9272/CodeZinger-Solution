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

function solution(a, b) {
  //Write your solution here
  const avg = (a + b) / 2;
  return avg.toFixed(2);
}

function main() {
  var a = parseInt(readLine());
  var b = parseInt(readLine());
  var res = solution(a, b);
  console.log(res);
}

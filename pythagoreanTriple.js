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

function solution(a, b, c) {
  //Write your solution here
  if (a ** 2 + b ** 2 === c ** 2) {
    return 1;
  }
  return 0;
}

function main() {
  var a = parseInt(readLine());
  var b = parseInt(readLine());
  var c = parseInt(readLine());

  var res = solution(a, b, c);
  console.log(res);
}

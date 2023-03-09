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

function solution(s1, s2) {
  //Write your solution here
  return s1.indexOf(s2);
}

function main() {
  var s1 = readLine();
  var s2 = readLine();
  var res = solution(s1, s2);
  console.log(res);
}

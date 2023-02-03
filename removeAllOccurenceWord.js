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

function solution(s, w) {
  //Write your solution here
  return s
    .split(" ")
    .filter(function (x) {
      return x !== w;
    })
    .join("  ");
}

function main() {
  var s = readLine();
  var w = readLine();

  var res = solution(s, w);
  console.log(res);
}

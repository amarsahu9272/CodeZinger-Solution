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

function solution(a) {
  //Write your solution here
  let sum = 0;
  for (let i = 0; i <= 2 * a; i++) {
    if (i % 2 === 0) {
      sum = sum + i * i;
    }
  }
  return sum;
}

function main() {
  var a = parseInt(readLine());

  var res = solution(a);
  console.log(res);
}

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
  var sum = 0;
  var arr = [];
  sum = b.reduce((acc, el) => acc + el, 0);
  for (let i = 0; i < a; i++) {
    arr.push(sum - b[i]);
  }
  return arr.join(" ");
}

function main() {
  var a = parseInt(readLine());
  var b = readLine().split(" ").map(Number);
  var res = solution(a, b);
  console.log(res);
}

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

function solution(a, arr) {
  //Write your solution here
  let maxSoFar = -Infinity;
  let maxEndingHere = 0;
  for (let i = 0; i < a; i++) {
    maxEndingHere += arr[i];
    if (maxEndingHere > maxSoFar) {
      maxSoFar = maxEndingHere;
    }
    if (maxEndingHere < 0) {
      maxEndingHere = 0;
    }
  }
  return maxSoFar;
}

function main() {
  var a = parseInt(readLine());
  var str = readLine();
  var arr = str.split(" ").map(Number);

  var res = solution(a, arr);
  console.log(res);
}

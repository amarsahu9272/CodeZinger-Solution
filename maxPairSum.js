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

function solution(n, arr) {
  //Write your solution here
  let largest = -Infinity;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      let sum = arr[i] + arr[j];
      if (sum > largest) {
        largest = sum;
      }
    }
  }
  return largest;
}

function main() {
  var a = parseInt(readLine());
  var s = readLine();
  var arr = s.split(" ").map(Number);

  var res = solution(a, arr);
  console.log(res);
}

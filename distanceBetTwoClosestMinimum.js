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
  let min = Number.MAX_VALUE;
  for (let i = 0; i < n; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  let indexes = [];
  for (let i = 0; i < n; i++) {
    if (arr[i] == min) {
      indexes.push(i);
    }
  }
  if (indexes.length < 2) {
    return -1;
  }
  let min_dist = Number.MAX_VALUE;
  for (let i = 1; i < indexes.length; i++) {
    if (indexes[i] - indexes[i - 1] < min_dist) {
      min_dist = indexes[i] - indexes[i - 1];
    }
  }
  return min_dist;
}

function main() {
  var a = parseInt(readLine());
  var s = readLine();
  var arr = s.split(" ").map(Number);

  var res = solution(a, arr);
  console.log(res);
}

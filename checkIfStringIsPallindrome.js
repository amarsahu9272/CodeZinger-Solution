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
  const s2 = a.split("").reverse().join("");
  if (a == s2) {
    return 1;
  } else {
    return 0;
  }
}

function main() {
  var a = readLine();

  var res = solution(a);
  console.log(res);
}

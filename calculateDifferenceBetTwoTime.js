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

function solution(t1, t2) {
  //Write your solution here
  const a = t1.replace("  ", " ");
  const b = t2.replace("  ", " ");

  const [h1, m1, s1] = a.split(" ").map(Number);
  const [h2, m2, s2] = b.split(" ").map(Number);
  const totalSec1 = h1 * 3600 + m1 * 60 + s1;
  const totalSec2 = h2 * 3600 + m2 * 60 + s2;
  let diffSeconds = Math.abs(totalSec1 - totalSec2);
  const hours = Math.floor(diffSeconds / 3600);
  diffSeconds = diffSeconds % 3600;
  const minutes = Math.floor(diffSeconds / 60);
  const seconds = diffSeconds % 60;
  const diffTime = `${hours}:${minutes.toString().padStart(1, "0")}:${seconds
    .toString()
    .padStart(1, "0")}`;
  return `${h1}:${m1}:${s1} - ${h2}:${m2}:${s2} = ${diffTime}`;
}
function main() {
  var a = readLine();
  var b = readLine();
  var res = solution(a, b);
  console.log(res);
}

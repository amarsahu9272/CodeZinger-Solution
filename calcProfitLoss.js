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
  const diff = b - a;
  if (diff > 0) {
    profitPerc = ((Math.abs(b - a) / a) * 100).toFixed(2);
    return `Profit ${profitPerc}%`;
  } else if (diff < 0) {
    lossPerc = ((Math.abs(b - a) / a) * 100).toFixed(2);
    return `Loss ${lossPerc}%`;
  } else {
    return "No Profit/Loss";
  }
}

function main() {
  var a = parseInt(readLine());
  var b = parseInt(readLine());

  var res = solution(a, b);
  console.log(res);
}

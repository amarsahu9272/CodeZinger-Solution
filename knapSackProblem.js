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

function solution(a, weights, profits, capacity) {
  //Write your solution here
  // const n =weights.length
  const dp = Array(a + 1)
    .fill()
    .map(() => Array(capacity + 1).fill(0));

  for (let i = 1; i <= a; i++) {
    for (let w = 1; w <= capacity; w++) {
      if (weights[i - 1] <= w) {
        dp[i][w] = Math.max(
          dp[i - 1][w],
          dp[i - 1][w - weights[i - 1]] + profits[i - 1]
        );
      } else {
        dp[i][w] = dp[i - 1][w];
      }
    }
  }
  return dp[a][capacity];
}

function main() {
  var a = parseInt(readLine());
  var weights = readLine().split(" ").map(Number);
  var profits = readLine().split(" ").map(Number);
  var capacity = parseInt(readLine());

  var res = solution(a, weights, profits, capacity);
  console.log(res);
}

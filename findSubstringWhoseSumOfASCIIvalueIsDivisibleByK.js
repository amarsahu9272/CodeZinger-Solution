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

function solution(s, k) {
  //Write your solution here
  let count = 0;
  let sum = 0;
  let freq = new Array(k).fill(0);

  for (let i = 0; i < s.length; i++) {
    sum = (sum + s.charCodeAt(i)) % k;
    if (i >= k - 1) {
      if (sum === 0) {
        count++;
      }
      count += freq[sum];
      freq[sum]++;
      sum = (sum - s.charCodeAt(i - k + 1) + k) % k;
    }
  }
  return count;
}

function main() {
  var str = readLine();
  var a = parseInt(readLine());

  var res = solution(str, a);
  console.log(res);
}

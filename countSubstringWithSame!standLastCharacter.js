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
  let n = a.length;
  let ans = 0;
  for (let centre = 0; centre < 2 * n - 1; centre++) {
    let left = Math.floor(centre / 2);
    let right = left + (centre % 2);
    while (left >= 0 && right < n && a[left] == a[right]) {
      ans++;
      left--;
      right++;
    }
  }
  return ans;
}

function main() {
  var a = readLine();

  var res = solution(a);
  console.log(res);
}

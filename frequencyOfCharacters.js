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

function solution(s) {
  //Write your solution here
  const freq = {};
  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i);
    if (freq[char]) {
      freq[char]++;
    } else {
      freq[char] = 1;
    }
  }
  let result = [];
  for (let char in freq) {
    result.push(`${char} ${freq[char]}`);
  }

  return result.join("\n");
}

function main() {
  var a = readLine();
  var s = a.split(" ").join("").trim();
  var str = s.split("").sort().join("");

  var res = solution(str);
  console.log(res);
}

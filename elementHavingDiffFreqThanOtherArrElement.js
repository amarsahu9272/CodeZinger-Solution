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

function solution(n, a) {
  //Write your solution here
  const freqMap = {};

  for (let i = 0; i < n; i++) {
    if (a[i] in freqMap) {
      freqMap[a[i]]++;
    } else {
      freqMap[a[i]] = 1;
    }
  }
  let trdEle = freqMap[0];
  let position = -1;
  for (let i in freqMap) {
    let flag = freqMap[i];
    if (trdEle !== flag) {
      position = i;
      break;
    }
  }
  let firstElem = freqMap[1];
  let secElem = freqMap[2];
  if (trdEle !== firstElem) {
    if (trdEle !== secElem) {
      for (let i in freqMap) {
        position = i;
        break;
      }
    }
  }
  return position;
}

function main() {
  var n = parseInt(readLine());
  var a = readLine();
  var s = a.split(" ").map(Number);
  var res = solution(n, s);
  console.log(res);
}



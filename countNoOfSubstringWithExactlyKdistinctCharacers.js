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

function solution(s, a) {
  //Write your solution here
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    let chars = new Set();
    for (let j = i; j < s.length; j++) {
      chars.add(s[j]);
      if (chars.size == a) {
        count++;
      } else if (chars.size > a) {
        break;
      }
    }
  }
  return count;
}

function main() {
  var s = readLine();
  var a = parseInt(readLine());

  var res = solution(s, a);
  console.log(res);
}
//=============================================================
//sliding window
function countSubstringsWithKDistinctChars(s, k) {
  let count = 0;
  let left = 0;
  let right = 0;
  let charCount = {};
  let distinctCount = 0;

  while (right < s.length) {
    const rightChar = s[right];
    if (!charCount[rightChar]) {
      charCount[rightChar] = 0;
    }
    charCount[rightChar]++;
    if (charCount[rightChar] === 1) {
      distinctCount++;
    }
    right++;

    while (distinctCount > k) {
      const leftChar = s[left];
      charCount[leftChar]--;
      if (charCount[leftChar] === 0) {
        distinctCount--;
      }
      left++;
    }

    if (distinctCount === k) {
      count += left + 1;
    }
  }

  return count;
}

// Check whether a string can become empty by repeatedly deleting a given sub-string
// Given a string S1 and another string S2, find whether S1 can become empty by deleting S2 from S1 again and again. You are allowed to delete S2 from S1 any number of times.

// Input:

//     cocodede

//     code

//     where:

// First line represents string S1.
// Second line represents string S2.

// Output:

//     Yes

// Explanation:

// In the string S1= "cocodede", we can first delete the substring "code". S1 now becomes "code". We can again delete sub-string "code". Now the string S1 becomes empty.
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

function solution(str1, str2) {
  //Write your solution here
  while (str1.length > 0) {
    var index = str1.indexOf(str2);
    if (index == -1) break;
    str1 = str1.replace(str2, "");
  }
  return str1.length == 0;
}

function main() {
  var str1 = readLine();
  var str2 = readLine();
  var res = solution(str1, str2);
  console.log(res == true ? "Yes" : "No");
}

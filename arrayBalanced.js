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
  a = a.replace(/\s/g, "");
  const arr = a.split("").map(Number);
  //     let mid
  //     if(a%2==0){
  //         mid = a/2
  //     }
  //     else{
  //         mid =  Math.floor(a/2)+1
  //     }
  //     const firstHalf = arr.slice(0,mid).reduce((acc,curr)=>acc+curr,0)
  //     const secondHalf = arr.slice(mid).reduce((acc,curr)=>acc+curr,0)

  //     if(firstHalf === secondHalf){
  //         return 1
  //     }
  //     else{
  //         return 0
  //     }
  let sumLeft = 0;
  let sumRight = arr.reduce((acc, curr) => acc + curr, 0);
  for (let i = 0; i < n; i++) {
    if (sumLeft === sumRight - arr[i]) {
      return 1;
    }
    sumLeft = sumLeft + arr[i];
    sumRight = sumRight - arr[i];
  }
  return 0;
}

function main() {
  var a = readLine();
  var n = parseInt(readLine());

  var res = solution(n, a);
  console.log(res);
}

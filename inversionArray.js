process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

function solution(a,arr) {
  //Write your solution here
    let count = 0
    for(let i=0;i<a-1;i++){
        for(let j=i+1;j<a;j++){
            if(arr[i]>arr[j]){
                count++
            }
        }
    }
    return count
}


function main() {
    var a = parseInt(readLine());
    let arr = readLine().split(" ").map(Number)

    var res = solution(a,arr);
    console.log(res);
}


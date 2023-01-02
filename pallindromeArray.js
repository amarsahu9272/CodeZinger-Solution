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

function solution(arr,index0,lastIndex) {
  //Write your solution here
    if(index0>=lastIndex)return 1
    if(arr[index0]===arr[lastIndex]){
        return solution(arr,index0+1,lastIndex-1)
}
else{return 0}
    
}


function main() {
    var a = parseInt(readLine());
    let arr=readLine().split(" ").map(Number)

    var res = solution(arr,0,a-1);
    console.log(res==1?"Yes":"No");
}


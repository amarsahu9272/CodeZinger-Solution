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

function solution(arr,n) {
  //Write your solution here
    let sum =0
    let count =0
    for(let i=0;i<n;i++){
        sum+=arr[i]
    }
    for(let i =0;i<n;i++){
        let minus=sum-arr[i]
        if(minus%arr[i]==0){
            count++
        }
    }
    return count
}


function main() {
    var t=1
    while(t--){
    var n = parseInt(readLine());
    var arr=readLine().split(" ").map(Number)
    var res = solution(arr,n);
    console.log(res);
    }
}


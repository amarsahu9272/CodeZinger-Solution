
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
   let prime = []
   for(let i=0;i<a;i++){
       if(arr[i]==2)
       {
       prime.push(arr[i])
       }
       else{
           let flag =false
           for(let j=2;j<arr[i];j++){
               if(arr[i]%j==0){
                   flag=true
                   break
               }
           }
           if(arr[i]!=1&&flag==false){
               prime.push(arr[i])
           }
       }
   }
    return prime.join(" ")
    
}


function main() {
    var a = parseInt(readLine());
    let arr = readLine().split(" ").map(Number)

    var res = solution(a,arr);
    console.log(res);
}


function deleteElement(a, arr) {
   let excludedFive= arr.filter((value => {
        if ((value) % 5 === 0) {
            return false
        }
        else { return true }
    }))
    var result = excludedFive.toString().replace(/,/g, " ")
    return result
}






let arr = [11, 15, 6, 8, 9, 10, 4]
let a = arr.length;

console.log(deleteElement(a, arr))




// codeZinger

// process.stdin.resume();
// process.stdin.setEncoding('ascii');

// var input_stdin = "";
// var input_stdin_array = "";
// var input_currentline = 0;

// process.stdin.on('data', function (data) {
//     input_stdin += data;
// });

// process.stdin.on('end', function () {
//     input_stdin_array = input_stdin.split("\n");
//     main();    
// });

// function readLine() {
//     return input_stdin_array[input_currentline++];
// }

// function solution(a,arr) {
//   //Write your solution here
//     let excludeFive = arr.filter((value)=>{
//         if(value%5===0){return false}
//         else{return true}
//     })
//     let result = excludeFive.toString().replace(/,/g," ")
//     return result
// }


// function main() {
//     var a = parseInt(readLine());
//     let arr = readLine().split(" ").map(Number)

//     var res = solution(a,arr);
//     console.log(res);
// }


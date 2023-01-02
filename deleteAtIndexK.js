// function deleteElement(a, arr, k) {
//     arr.splice(k, 1);
//     var result = arr.toString().replace(/,/g, " ")
//     return result
// }

// let arr = [10,20,30,40,50]
// let a = arr.length;

// console.log(deleteElement(a, arr, 1))


function deleteElement(arr, n, x) {
    // Search x in array
    let temp = []
    for (let i = 0; i < n; i++) {
        if (i === x) {
            continue
        }
        else {
            temp.push(arr[i])
        }
    }
    var result = temp.toString().replace(/,/g, " ")
    return result
}




// let arr = [11, 15, 6, 8, 9, 2, 10];
let arr = [34,56,2,13]
let n = arr.length;
let x = 1;
console.log(deleteElement(arr, n, x))





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
    let i;
    for (i = 0; i < n; i++) {
        if (i === x) {
            break;
        }
    }

    // If x found in array
    if (i < n) {
        // reduce size of array and move all
        // elements on space ahead
        n = n - 1;
        for (let j = i; j < n; j++) {
            arr[j] = arr[j + 1];
        }

    }


    var result = arr.toString().replace(/,/g, " ")
    return result
}


// driver code

let arr = [11, 15, 6, 8, 9, 2, 10];
let n = arr.length;
let x = 2;
console.log(deleteElement(arr, n, x))

// // Delete x from arr[]
// n = deleteElement(arr, n, x);

// console.log("Modified array is </br>");
// for (let i = 0; i < n; i++) {
//     console.log(arr[i] + " ");

// }



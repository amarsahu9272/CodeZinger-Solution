function RightRotate(a, n, k)
{
 
    // If rotation is greater
    // than size of array
    k = k % n;
    let rot =" "
 
    for (let i = 0; i < n; i++) {
        if (i < k) {
 
            // Printing rightmost
            // kth elements
            //[1, 2, 3, 4, 5]
            rot+= a[n + i - k] + " ";
        }
        else {
 
            // Prints array after
            // 'k' elements
            rot+= a[i - k] + " ";
        }
    }
    return rot
   
}
 
// Driver code
let Array = [1, 2, 3, 4, 5];
let N = Array.length;
let K = 2;
 
console.log(RightRotate(Array, N, K))
console.log(K%N)
 
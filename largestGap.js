function solve(a,n)
{
    let max1 = Number.MIN_VALUE ;
     
for (let i = 0; i < n; i++)
{
    for (let j = 0; j < n; j++)
    {
        if (Math.abs(a[i] - a[j]) > max1)
        {
             
            max1 = Math.abs(a[i] - a[j]);
        }
    }
}
return max1;
}
 
// Driver Code
let arr=[-1, 2, 3,-4, -10, 22];
let size = arr.length;
console.log("Largest gap is : " +solve(arr, size));
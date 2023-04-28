// Input :
// N = 5
// A[] = {-8, 2, 3, -6, 10}
// K = 2
// Output :
// -8 0 -6 -6
// Explanation :
// First negative integer for each window of size k
// {-8, 2} = -8
// {2, 3} = 0 (does not contain a negative integer)
// {3, -6} = -6
// {-6, 10} = -6

function printFirstNegativeInteger(N, K, A) {
  // code here
  const result = [];
  let windowStart = 0;
  let windowEnd = 0;
  while (windowEnd < N) {
    // move the window
    while (windowEnd - windowStart + 1 < K) {
      windowEnd++;
    }
    // check the first negative element in the window
    let foundNegative = false;
    for (let i = windowStart; i <= windowEnd; i++) {
      if (A[i] < 0) {
        result.push(A[i]);
        foundNegative = true;
        break;
      }
    }
    if (!foundNegative) {
      result.push(0);
    }
    // move the window again
    windowStart++;
    windowEnd++;
  }
  return result;
}

console.log(printFirstNegativeInteger(8, 3, [12, -1, -7, 8, -15, 30, 16, 28]));

// function firstNegativeInWindow(A, K) {
//   const result = [];
//   const queue = [];
//   let windowStart = 0;
//   let windowEnd = 0;
//   while (windowEnd < A.length) {
//     // add the new element at the end of the queue
//     if (A[windowEnd] < 0) {
//       queue.push(A[windowEnd]);
//     }
//     // remove the first element of the queue if it's no longer in the window
//     if (windowEnd - windowStart + 1 === K) {
//       if (A[windowStart] === queue[0]) {
//         queue.shift();
//       }
//       windowStart++;
//     }
//     // check if the queue is empty
//     if (queue.length === 0) {
//       result.push(0);
//     } else {
//       result.push(queue[0]);
//     }
//     // move the window
//     windowEnd++;
//   }
//   return result;
// }

// console.log(firstNegativeInWindow([12, -1, -7, 8, -15, 30, 16, 28], 3)); //[-1 -1 -7 -15 -15 0 ]

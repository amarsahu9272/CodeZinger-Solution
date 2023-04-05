// You are given an m x n integer matrix matrix with the following two properties:

// Each row is sorted in non-decreasing order.
// The first integer of each row is greater than the last integer of the previous row.
// Given an integer target, return true if target is in matrix or false otherwise.

// You must write a solution in O(log(m * n)) time complexity

// Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13
// Output: false
const searchMatrix = function (matrix, target) {
  let n = matrix.length;
  let m = matrix[0].length;
  let total = n * m;
  let l = 0;
  let r = total - 1;
  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    let row = Math.floor(mid / m);
    let col = mid % m;
    let x = matrix[row][col];
    if (x == target) {
      return true;
    } else if (target < x) {
      //left
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return false;
};

console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    60
  )
);

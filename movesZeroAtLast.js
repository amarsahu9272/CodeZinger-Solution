// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

function moveZeroes(nums) {
  let i = 0;
  let j = 0;

  while (j < nums.length) {
    if (nums[j] !== 0) {
      nums[i] = nums[j];
      i++;
    }
    j++;
  }

  while (i < nums.length) {
    nums[i] = 0;
    i++;
  }

  return nums;
}

console.log(moveZeroes([0, 1, 0, 3, 12]));

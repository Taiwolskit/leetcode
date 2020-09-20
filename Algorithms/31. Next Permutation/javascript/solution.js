/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  function swap(i, j) {
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  }

  function reverse(start) {
    let end = nums.length - 1;
    while (start < end) {
      swap(start, end);
      start++;
      end--;
    }
  }

  let i = nums.length - 2;
  while (i >= 0 && nums[i + 1] <= nums[i]) {
    i--;
  }

  if (i >= 0) {
    let j = nums.length - 1;
    while (j >= 0 && nums[j] <= nums[i]) {
      j--;
    }
    swap(i, j);
  }
  reverse(i + 1);
};

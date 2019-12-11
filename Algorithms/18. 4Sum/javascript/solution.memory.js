/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  const len = nums.sort((a, b) => a - b).length;
  const result = [];
  let sum;

  for (let i = 0; i < len; i++) {
    if (i === 0 || nums[i] > nums[i - 1]) {
      for (let j = i + 1; j < len; j++) {
        if (j === i + 1 || nums[j] > nums[j - 1]) {
          let l = j + 1;
          let r = len - 1;
          while (l < r) {
            sum = nums[i] + nums[j] + nums[l] + nums[r] - target;
            if (sum === 0) {
              result.push([nums[i], nums[j], nums[l], nums[r]]);
              l++;
              r--;
              while (l < r && nums[r] === nums[r + 1]) {
                r--;
              }
              while (l < r && nums[l] === nums[l - 1]) {
                l--;
              }
            } else if (sum > 0) {
              r--;
            } else {
              l++;
            }
          }
        }
      }
    }
  }

  return result;
};

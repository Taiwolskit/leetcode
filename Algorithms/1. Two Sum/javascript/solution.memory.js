/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let indices;
  for (let i = 0; i < nums.length; i++) {
    const result = nums.indexOf(target - nums[i]);
    if (result > -1 && result !== i) {
      indices = [i, result];
      break;
    }
  }

  return indices;
};

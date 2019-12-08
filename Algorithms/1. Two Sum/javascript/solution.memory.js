/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let result;

  for (let i = 0; i < nums.length; i++) {
    const diff = nums.indexOf(target - nums[i]);

    if (diff > -1 && diff !== i) {
      result = [i, diff];
      break;
    }
  }

  return result;
};

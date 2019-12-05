/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  const result = [];
  if (nums.length < 3) return result;
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) {
      break;
    }
    if (i > 0 && nums[i] == nums[i - 1]) {
      continue;
    }

    let sum = 0 - nums[i];
    let lo = i + 1;
    let hi = nums.length - 1;

    while (lo < hi) {
      if (nums[lo] + nums[hi] == sum) {
        result.push([nums[lo], nums[hi], nums[i]]);
        while (nums[lo] == nums[lo + 1]) {
          lo++;
        }
        lo++;
        hi--;
      } else if (nums[lo] + nums[hi] < sum) {
        lo++;
      } else {
        hi--;
      }
    }
  }
  return result;
};

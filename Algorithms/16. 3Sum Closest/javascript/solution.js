/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  nums.sort((a, b) => a - b);
  let dif = Number.MAX_SAFE_INTEGER;
  const len = nums.length;

  let result;
  for (let i = 0; i < len - 2; i++) {
    let l = i + 1;
    let r = len - 1;
    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r];
      const abs = Math.abs(sum - target);
      if (abs < dif) {
        dif = Math.abs(sum - target);
        result = sum;
      } else if (sum < target) {
        l++;
      } else {
        r--;
      }
    }
  }

  return result;
};

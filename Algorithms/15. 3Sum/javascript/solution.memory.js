/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  const solution = [];
  nums = nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    let j = i + 1;
    let k = nums.length - 1;
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    while (j < k) {
      if (nums[i] + nums[j] + nums[k] === 0) {
        let last = solution[solution.length - 1];
        if (
          solution.length >= 1 &&
          nums[i] === last[0] &&
          nums[j] === last[1] &&
          nums[k] === last[2]
        ) {
          j = j + 1;
          k = k - 1;
          continue;
        }
        solution.push([nums[i], nums[j], nums[k]]);
        j = j + 1;
        k = k - 1;
        continue;
      } else if (nums[i] + nums[j] + nums[k] > 0) {
        k = k - 1;
        continue;
      } else {
        j = j + 1;
        continue;
      }
    }
  }
  return solution;
};

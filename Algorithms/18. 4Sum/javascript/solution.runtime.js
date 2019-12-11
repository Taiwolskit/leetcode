/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  const output = [];

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 3; i++) {
    if (0 < i && nums[i - 1] === nums[i]) continue;

    const tOne = target - nums[i];

    if (nums[i + 1] + nums[i + 2] + nums[i + 3] > tOne) break;
    if (
      nums[nums.length - 3] + nums[nums.length - 2] + nums[nums.length - 1] <
      tOne
    )
      continue;

    for (let j = i + 1; j < nums.length - 2; j++) {
      if (i + 1 < j && nums[j] === nums[j - 1]) continue;

      const tTwo = tOne - nums[j];

      if (nums[j + 1] + nums[j + 2] > tTwo) break;
      if (nums[nums.length - 2] + nums[nums.length - 1] < tTwo) continue;

      let left = j + 1;
      let right = nums.length - 1;

      while (left < right) {
        if (nums[left] + nums[right] === tTwo) {
          output.push([nums[i], nums[j], nums[left++], nums[right--]]);
          while (left < right && nums[left - 1] === nums[left]) left++;
          while (left < right && nums[right] === nums[right + 1]) right--;
        } else if (nums[left] + nums[right] < tTwo) {
          left++;
        } else {
          right--;
        }
      }
    }
  }

  return output;
};

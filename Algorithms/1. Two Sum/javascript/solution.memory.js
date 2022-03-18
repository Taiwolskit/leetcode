/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];

        if (nums.includes(diff) && i !== nums.indexOf(diff)) {
            return [nums.indexOf(diff), i];
        }
    }
};

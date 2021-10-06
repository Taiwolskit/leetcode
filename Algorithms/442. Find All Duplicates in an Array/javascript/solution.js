/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
    const result = [];

    for (let i = 0; i < nums.length; i++) {
        const cur = Math.abs(nums[i]);

        if (nums[cur - 1] < 0) {
            result.push(cur);
        }

        nums[cur - 1] *= -1;
    }

    return result;
};

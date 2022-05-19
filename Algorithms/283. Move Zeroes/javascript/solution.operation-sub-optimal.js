/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let lastNonZeroFoundAt = 0;
    for (const num of nums) {
        if (num !== 0) {
            nums[lastNonZeroFoundAt++] = num;
        }
    }
    while (lastNonZeroFoundAt < nums.length) {
        nums[lastNonZeroFoundAt++] = 0;
    }
};

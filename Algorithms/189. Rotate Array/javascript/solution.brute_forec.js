/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    k %= nums.length;

    for (let i = 0; i < k; i++) {
        let previous = nums[nums.length - 1];
        for (let j = 0; j < nums.length; j++) {
            let temp = nums[j];
            nums[j] = previous;
            previous = temp;
        }
    }
};

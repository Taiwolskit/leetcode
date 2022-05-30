/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
    for (const num of nums) {
        let newIndex = Math.abs(num) - 1;

        if (nums[newIndex] > 0) {
            nums[newIndex] *= -1;
        }
    }

    const result = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            result.push(i + 1);
        }
    }
    return result;
};

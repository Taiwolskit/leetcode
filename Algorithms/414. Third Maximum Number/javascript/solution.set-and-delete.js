/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
    nums = new Set(nums);
    let maximum = Math.max(...nums);

    if (nums.size < 3) {
        return maximum;
    }

    nums.delete(maximum);
    let secondMaximum = Math.max(...nums);
    nums.delete(secondMaximum);
    return Math.max(...nums);
};

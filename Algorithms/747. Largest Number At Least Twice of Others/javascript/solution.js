/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
    if (nums.length === 0) {
        return -1;
    }
    let largest = -1,
        second = -1,
        maxIdx = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > largest) {
            second = largest;
            largest = nums[i];
            maxIdx = i;
        } else if (nums[i] > second) {
            second = nums[i];
        }
    }

    return largest >= second * 2 ? maxIdx : -1;
};

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let i = 0;
    for (const j of nums) {
        if (j !== val) {
            nums[i] = j;
            i++;
        }
    }
    return i;
};

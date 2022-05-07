/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
    const S = nums.reduce((a, b) => a + b, 0);
    let leftsum = 0;
    for (let i = 0; i < nums.length; i++) {
        if (leftsum === S - leftsum - nums[i]) {
            return i;
        }
        leftsum += nums[i];
    }
    return -1;
};

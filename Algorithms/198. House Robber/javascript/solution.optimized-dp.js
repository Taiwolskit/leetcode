/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = function (nums) {
    if (!nums) {
        return 0;
    }

    const N = nums.length;
    let robNextPlusOne = 0,
        robNext = nums[N - 1];

    for (let i = N - 2; i >= 0; i--) {
        const current = Math.max(robNext, robNextPlusOne + nums[i]);
        robNextPlusOne = robNext;
        robNext = current;
    }
    return robNext;
};

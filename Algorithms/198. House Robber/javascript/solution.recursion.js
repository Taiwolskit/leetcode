/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = function (nums) {
    const memo = {};

    const robFrom = (i, rob_nums) => {
        if (i >= rob_nums.length) {
            return 0;
        }
        if (i in memo) {
            return memo[i];
        }
        const ans = Math.max(rob_nums[i] + robFrom(i + 2, rob_nums), robFrom(i + 1, rob_nums));
        memo[i] = ans;
        return ans;
    };

    return robFrom(0, nums);
};

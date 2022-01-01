/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function (nums) {
    if (nums.length > 1 && new Set(nums).size === 1) {
        return nums[0] ** 3 * (nums.length - 2) + nums[0] ** 2 + nums[0];
    }

    nums = [1, ...nums, 1];
    const n = nums.length;
    const dp = [];
    for (let i = 0; i < n; i++) {
        dp[i] = new Array(n).fill(0);
    }

    for (let left = n - 2; left > 0; left--) {
        for (let right = left; n - 1 > right; right++) {
            for (let i = left; right + 1 > i; i++) {
                const gain = nums[left - 1] * nums[i] * nums[right + 1];
                const remaining = dp[left][i - 1] + dp[i + 1][right];
                dp[left][right] = Math.max(dp[left][right], gain + remaining);
            }
        }
    }

    return dp[1][n - 2];
};

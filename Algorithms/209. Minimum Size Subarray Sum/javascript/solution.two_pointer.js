/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    const n = nums.length;
    let ans = Number.MAX_SAFE_INTEGER;
    let left = 0, total = 0;
    for (let i = 0; i < n; i++) {
        total += nums[i];
        while (total >= target) {
            ans = Math.min(ans, i - left + 1);
            total -= nums[left++];
        }
    }
    return ans === Number.MAX_SAFE_INTEGER ? 0 : ans;
};

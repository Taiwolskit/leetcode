/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    const n = nums.length;
    if (n === 0) return n;

    const MAX = Number.MAX_SAFE_INTEGER;
    let ans = MAX;

    for (let i = 1; i < n; i++) {
        nums[i] += nums[i - 1];
        if (nums[i] < target) continue;

        const closest_index = binarySearch(0, i, nums[i]);
        ans = Math.min(ans, i - closest_index + 1);
    }
    return ans == MAX ? 0 : ans;

    function binarySearch(left, right, total) {
        while (left <= right) {
            const mid = left + Math.floor((right - left) / 2);
            const diff = total - nums[mid];
            if (diff === target) return mid + 1;
            if (diff > target) left = mid + 1;
            else right = mid - 1;
        }
        return left;
    }
};
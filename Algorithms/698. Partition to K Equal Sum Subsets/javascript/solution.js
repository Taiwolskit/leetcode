/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function (nums, k) {
    if (k === 1) return true;

    let total = 0;
    for (const num of nums) {
        total += num;
    }

    if (total % k !== 0) return false;

    const partition = total / k;
    const visited = Array(nums.length).fill(false);

    const helper = (k, cur, start) => {
        if (k === 1) return true;
        if (cur === partition) return helper(k - 1, 0, 0);

        for (let i = start; i < nums.length; i++) {
            if (!visited[i] && cur + nums[i] <= partition) {
                visited[i] = true;
                if (helper(k, cur + nums[i], i + 1)) {
                    return true;
                }
                visited[i] = false;
            }
        }

        return false;
    };

    return helper(k, 0, 0);
};

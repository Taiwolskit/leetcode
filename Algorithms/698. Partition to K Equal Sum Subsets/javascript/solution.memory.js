/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var canPartitionKSubsets = function (nums, k) {
    const total = nums.reduce((sum, num) => sum + num, 0);

    if (total % k !== 0) {
        return false;
    }

    const target = total / k;
    const visited = new Array(nums.length).fill(false);

    const canPartition = (start, numberOfSubsets, currentSum) => {
        if (numberOfSubsets === 1) {
            return true;
        }

        if (currentSum === target) {
            return canPartition(0, numberOfSubsets - 1, 0);
        }
        for (let i = start; i < nums.length; i++) {
            if (!visited[i]) {
                visited[i] = true;

                if (
                    canPartition(i + 1, numberOfSubsets, currentSum + nums[i])
                ) {
                    return true;
                }

                visited[i] = false;
            }
        }
        return false;
    };

    return canPartition(0, k, 0);
};

/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = function (nums) {
    if (!nums) {
        return 0;
    }

    const N = nums.length;
    const maxRobbedAmount = new Array(N + 1).fill(0);
    maxRobbedAmount[N] = 0;
    maxRobbedAmount[N - 1] = nums[N - 1];

    for (let i = N - 2; i >= 0; i--) {
        maxRobbedAmount[i] = Math.max(nums[i] + maxRobbedAmount[i + 2], maxRobbedAmount[i + 1]);
    }
    return maxRobbedAmount[0];
};

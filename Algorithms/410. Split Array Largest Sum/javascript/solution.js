/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */
var splitArray = function (nums, m) {
    const minSubarraysRequired = (maxSumAllowed) => {
        let currentSum = 0,
            splitsRequired = 0;
        for (const element of nums) {
            if (currentSum + element <= maxSumAllowed) {
                currentSum += element;
            } else {
                currentSum = element;
                splitsRequired++;
            }
        }
        return splitsRequired + 1;
    };

    let minimumLargestSplitSum = 0,
        left = Math.max(...nums),
        right = nums.reduce((a, b) => a + b, 0);
    while (left <= right) {
        const maxSumAllowed = Math.floor((left + right) / 2);

        if (minSubarraysRequired(maxSumAllowed) <= m) {
            right = maxSumAllowed - 1;
            minimumLargestSplitSum = maxSumAllowed;
        } else {
            left = maxSumAllowed + 1;
        }
    }

    return minimumLargestSplitSum;
};

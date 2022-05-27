/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
    const maximumIgnoringSeenMaximums = (nums, seenMaximums) => {
        let maximum = null;
        for (const num of nums) {
            if (seenMaximums.has(num)) {
                continue;
            }
            if (maximum === null || num > maximum) {
                maximum = num;
            }
        }
        return maximum;
    };

    const seenMaximums = new Set();
    for (let i = 0; i < 3; i++) {
        const currentMaximum = maximumIgnoringSeenMaximums(nums, seenMaximums);
        if (currentMaximum === null) {
            return Math.max(...seenMaximums);
        }
        seenMaximums.add(currentMaximum);
    }

    return Math.min(...seenMaximums);
};

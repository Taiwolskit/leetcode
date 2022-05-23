/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
    let prev = -1,
        curr = 0,
        maxLength = 0;

    for (const num of nums) {
        if (num === 0) {
            [prev, curr] = [curr, 0];
        } else {
            curr++;
        }

        maxLength = Math.max(maxLength, curr + prev + 1);
    }

    return maxLength;
};

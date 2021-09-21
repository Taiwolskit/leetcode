/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
    let result = 0;
    let count = 0;

    for (const num of nums) {
        if (num === 1) {
            count++;
            result = Math.max(result, count);
        } else {
            count = 0;
        }
    }
    return result;
};

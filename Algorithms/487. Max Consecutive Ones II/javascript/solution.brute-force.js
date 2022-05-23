/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
    let longestSequence = 0;
    for (let left = 0; left < nums.length; left++) {
        let numZeroes = 0;
        for (let right = left; right < nums.length; right++) {
            if (numZeroes === 2) {
                break;
            }
            if (nums[right] === 0) {
                numZeroes++;
            }
            if (numZeroes <= 1) {
                longestSequence = Math.max(longestSequence, right - left + 1);
            }
        }
    }
    return longestSequence;
};

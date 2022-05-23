/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
    let longestSequence = 0,
        right = 0,
        left = 0,
        numZeroes = 0;

    while (right < nums.length) {
        if (nums[right] === 0) {
            numZeroes++;
        }

        while (numZeroes === 2) {
            if (nums[left] === 0) {
                numZeroes--;
            }
            left++;
        }

        longestSequence = Math.max(longestSequence, right - left + 1);
        right++;
    }

    return longestSequence;
};

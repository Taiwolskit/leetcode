/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var twoSumLessThanK = function (nums, k) {
    nums.sort((a, b) => a - b);
    let answer = -1,
        left = 0,
        right = nums.length - 1;

    while (left < right) {
        const sum = nums[left] + nums[right];
        if (sum < k) {
            answer = Math.max(answer, sum);
            left++;
        } else {
            right--;
        }
    }

    return answer;
};

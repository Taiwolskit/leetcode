/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var twoSumLessThanK = function (nums, k) {
    let answer = -1;
    const count = new Array(1001).fill(0);
    for (const num of nums) {
        count[num]++;
    }
    let lo = 1,
        hi = 1000;
    while (lo <= hi) {
        if (lo + hi >= k || count[hi] === 0) {
            hi--;
        } else {
            if (count[lo] > (lo < hi ? 0 : 1)) {
                answer = Math.max(answer, lo + hi);
            }
            lo++;
        }
    }
    return answer;
};

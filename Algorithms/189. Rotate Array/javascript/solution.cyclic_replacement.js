/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    const n = nums.length;
    k %= n;

    let start = 0,
        count = 0;
    while (count < n) {
        let current = start,
            prev = nums[start];
        while (current !== start) {
            let nextIdx = (current + k) % n;
            let temp = nums[nextIdx];
            nums[nextIdx] = prev;
            prev = temp;
            current = nextIdx;
            count++;
        }
        start++;
    }
};

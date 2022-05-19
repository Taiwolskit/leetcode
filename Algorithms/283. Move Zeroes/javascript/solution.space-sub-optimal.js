/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    const n = nums.length;
    let numZeroes = 0;
    for (let i = 0; i < n; i++) {
        numZeroes += nums[i] === 0 ? 1 : 0;
    }

    const ans = [];
    for (const num of nums) {
        if (num !== 0) {
            ans.push(num);
        }
    }
    while (numZeroes--) {
        ans.push(0);
    }
    nums.splice(0, nums.length, ...ans);
};

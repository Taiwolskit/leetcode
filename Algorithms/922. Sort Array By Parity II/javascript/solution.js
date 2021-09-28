/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function (nums) {
    let evenIdx = 0;
    let oddIdx = 1;

    while (evenIdx < nums.length && oddIdx < nums.length) {
        if (nums[evenIdx] % 2 === 0) {
            evenIdx += 2;
        } else if (nums[oddIdx] % 2 === 1) {
            oddIdx += 2;
        } else {
            let temp = nums[evenIdx];
            nums[evenIdx] = nums[oddIdx];
            nums[oddIdx] = temp;
            evenIdx += 2;
            oddIdx += 2;
        }
    }
    return nums;
};

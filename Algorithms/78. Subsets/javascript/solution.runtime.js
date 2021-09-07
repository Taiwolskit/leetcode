/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    const output = [];

    const backtrack = (path, index) => {
        output.push(path);
        for (let i = index; i < nums.length; i++) {
            backtrack([...path, nums[i]], i + 1);
        }
    };

    backtrack([], 0);
    return output;
};

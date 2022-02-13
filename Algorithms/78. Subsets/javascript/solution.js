/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    const backtrack = (first = 0, curr = []) => {
        output.push(curr);
        for (let i = first; i < nums.length; i++) {
            backtrack(i + 1, [...curr, nums[i]]);
        }
    };

    const output = [];
    backtrack();
    return output;
};

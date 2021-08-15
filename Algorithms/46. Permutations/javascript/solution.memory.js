/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    let res = [[nums[0]]];
    for (let i = 1; i < nums.length; i++) {
        let ans = [];
        for (const val of res) {
            for (let k = 0; k <= val.length; k++) {
                let tmp = [...val];
                tmp.splice(k, 0, nums[i]);
                ans.push(tmp);
            }
        }
        res.splice(0, res.length, ...ans);
    }
    return res;
};

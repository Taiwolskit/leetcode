/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {
    const result = new Array();
    nums.forEach((e) => {
        if (e % 2 == 1) {
            result.push(e);
        } else {
            result.unshift(e);
        }
    });

    return result;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let count = 0;
    for (const num of nums) {
        count += ~String(num).length & 1
    }
    return count;
};
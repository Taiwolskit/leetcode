/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
    const hashTable = {};

    for (const num of nums) {
        hashTable[num] = true;
    }

    const result = [];

    for (let i = 1; i <= nums.length; i++) {
        if (!hashTable[i]) {
            result.push(i);
        }
    }
    return result;
};

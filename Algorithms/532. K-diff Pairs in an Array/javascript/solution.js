/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function (nums, k) {
    const counter = new Map();
    for (const num of nums) {
        const count = counter.get(num) || 0;
        counter.set(num, count + 1);
    }

    let result = 0;
    for (const [num, count] of counter) {
        if ((k > 0 && counter.has(num + k)) || (k === 0 && count > 1)) {
            result += 1;
        }
    }

    return result;
};

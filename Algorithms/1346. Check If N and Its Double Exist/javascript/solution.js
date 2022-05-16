/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
    const seen = new Set();
    for (const value of arr) {
        if (seen.has(value * 2) || seen.has(value / 2)) {
            return true;
        }
        seen.add(value);
    }
    return false;
};

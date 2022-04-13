/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    if (numRows === 1) {
        return s;
    }

    let ret = '';
    const n = s.length;
    const cycleLen = 2 * numRows - 2;
    for (let i = 0; i < numRows; i++) {
        for (let j = i; j < n; j += cycleLen) {
            ret += s[j];
            if (i !== 0 && i !== numRows - 1 && j + cycleLen - 2 * i < n) {
                ret += s[j + cycleLen - 2 * i];
            }
        }
    }
    return ret;
};

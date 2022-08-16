/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    const count = new Array(26).fill(0);
    const n = s.length;
    const aCode = 'a'.charCodeAt(0);

    for (let i = 0; i < n; i++) {
        const idx = s.charCodeAt(i) - aCode;
        count[idx]++;
    }

    for (let i = 0; i < n; i++) {
        const idx = s.charCodeAt(i) - aCode;
        if (count[idx] === 1) {
            return i;
        }
    }
    return -1;
};

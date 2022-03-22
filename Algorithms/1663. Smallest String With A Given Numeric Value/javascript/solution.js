/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getSmallestString = function (n, k) {
    const result = Array(n).fill(0);
    for (let i = n - 1; i >= 0; i--) {
        const add = Math.min(k - i, 26);
        result[i] = String.fromCharCode(add + 'a'.charCodeAt(0) - 1);
        k -= add;
    }
    return result.join('');
};

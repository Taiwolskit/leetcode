/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n, map = [0, 1, 1]) {
    if (map[n] >= 0) return map[n];
    map[n] = tribonacci(n - 3, map) + tribonacci(n - 2, map) + tribonacci(n - 1, map);
    return map[n];
};

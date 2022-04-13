/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
    const result = new Array(n).fill(0).map(() => new Array(n).fill(0));
    let cnt = 1;
    for (let layer = 0; layer < Math.floor((n + 1) / 2); layer++) {
        for (let i = layer; i < n - layer; i++) {
            result[layer][i] = cnt++;
        }
        for (let i = layer + 1; i < n - layer; i++) {
            result[i][n - layer - 1] = cnt++;
        }
        for (let i = layer + 1; i < n - layer; i++) {
            result[n - layer - 1][n - i - 1] = cnt++;
        }
        for (let i = layer + 1; i < n - layer - 1; i++) {
            result[n - i - 1][layer] = cnt++;
        }
    }

    return result;
};

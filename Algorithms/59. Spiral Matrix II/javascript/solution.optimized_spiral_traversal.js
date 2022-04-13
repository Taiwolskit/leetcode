/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
    const result = [...Array(n)].map(() => Array(n).fill(0));
    const dir = [
        [0, 1],
        [1, 0],
        [0, -1],
        [-1, 0],
    ];

    let row = 0,
        col = 0,
        d = 0,
        cnt = 1;
    while (cnt <= n * n) {
        result[row][col] = cnt++;

        let r = (row + dir[d][0]) % n;
        let c = (col + dir[d][1]) % n;

        if (result[r][c] !== 0) {
            d = (d + 1) % 4;
        }

        row += dir[d][0];
        col += dir[d][1];
    }

    return result;
};

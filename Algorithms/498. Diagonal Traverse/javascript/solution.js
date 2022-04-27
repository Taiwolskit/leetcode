/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function (mat) {
    const d = {};

    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[0].length; j++) {
            d[i + j] = d[i + j] || [];
            d[i + j].push(mat[i][j]);
        }
    }

    const result = [];
    for (const key in d) {
        if (key % 2 === 0) {
            result.push(...d[key].reverse());
        } else {
            result.push(...d[key]);
        }
    }

    return result;
};

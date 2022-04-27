/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function (mat) {
    if (!mat || mat.length === 0) {
        return [];
    }
    const N = mat.length,
        M = mat[0].length,
        result = [];
    let intermediate = [];

    for (let d = 0; d < N + M - 1; d++) {
        intermediate = [];
        let r = d - M + 1;
        let c = M - 1;
        if (d < M) {
            r = 0;
            c = d;
        }

        while (r < N && c >= 0) {
            intermediate.push(mat[r][c]);
            r++;
            c--;
        }

        if (d % 2 === 0) {
            intermediate = intermediate.reverse();
        }
        result.push(...intermediate);
    }

    return result;
};

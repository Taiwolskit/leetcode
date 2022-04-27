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
    let row = 0,
        column = 0,
        direction = 1;

    while (row < N && column < M) {
        result.push(mat[row][column]);

        let newRow = row + (direction === 1 ? -1 : 1);
        let newColumn = column + (direction === 1 ? 1 : -1);

        if (newRow < 0 || newRow === N || newColumn < 0 || newColumn === M) {
            if (direction) {
                row += column === M - 1 ? 1 : 0;
                column += column < M - 1 ? 1 : 0;
            } else {
                column += row === N - 1 ? 1 : 0;
                row += row < N - 1 ? 1 : 0;
            }

            direction = 1 - direction;
        } else {
            row = newRow;
            column = newColumn;
        }
    }

    return result;
};

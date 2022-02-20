/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    const result = [];
    const rows = matrix.length, columns = matrix[0].length;
    let up = 0, left = 0;
    let right = columns - 1;
    let down = rows - 1;

    while (result.length < rows * columns) {
        for (let col = left; col <= right; col++) {
            result.push(matrix[up][col]);
        }

        for (let row = up + 1; row <= down; row++) {
            result.push(matrix[row][right]);
        }

        if (up !== down) {
            for (let col = right - 1;  left - 1 < col; col--) {
                result.push(matrix[down][col]);
            }
        }

        if (left !== right) {
            for (let row = down - 1; up < row; row--) {
                result.push(matrix[row][left]);
            }
        }

        left++;
        right--;
        up++;
        down--;
    }

    return result;
};

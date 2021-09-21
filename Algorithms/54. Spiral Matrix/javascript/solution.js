/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    const result = [];

    let up = 0;
    let down = matrix.length - 1;
    let right = matrix[0].length - 1;
    let left = 0;

    while (result.length < matrix.length * matrix[0].length) {
        for (let i = left; i <= right; i++) {
            result.push(matrix[up][i]);
        }

        for (let i = up + 1; i <= down; i++) {
            result.push(matrix[i][right]);
        }

        if (up !== down) {
            for (let i = right - 1; i >= left; i--) {
                result.push(matrix[down][i]);
            }
        }

        if (left !== right) {
            for (let i = down - 1; i > up; i--) {
                result.push(matrix[i][left]);
            }
        }

        up++;
        right--;
        down--;
        left++;
    }

    return result;
};

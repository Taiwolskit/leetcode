/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    const m = matrix.length;
    if (m === 0) return false;
    const n = matrix[0].length;

    for (let left = 0, right = m * n - 1; left <= right; ) {
        const pivotIdx = Math.floor((left + right) / 2);
        const pivotElement = matrix[Math.floor(pivotIdx / n)][pivotIdx % n];
        if (pivotElement === target) return true;
        if (target < pivotElement) right = pivotIdx - 1;
        else left = pivotIdx + 1;
    }
    return false;
};

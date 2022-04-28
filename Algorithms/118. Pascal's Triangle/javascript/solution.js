/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    const triangle = [[1]];

    for (let i = 1; i < numRows; i++) {
        const row = [];
        const triangleLength = triangle.length - 1;

        for (let j = 1; j < i; j++) {
            row.push(
                triangle[triangleLength][j] +
                    triangle[triangleLength][j - 1]
            );
        }
        triangle.push([1, ...row, 1]);
    }

    return triangle;
};

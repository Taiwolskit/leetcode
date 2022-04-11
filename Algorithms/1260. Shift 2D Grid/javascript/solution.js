/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function (grid, k) {
    const numRows = grid.length,
        numCols = grid[0].length;
    const newGrid = [];
    for (let i = 0; i < numRows; i++) {
        newGrid[i] = new Array(numCols).fill(0);
    }

    for (let row = 0; row < numRows; row++) {
        for (let col = 0; col < numCols; col++) {
            const newCol = (col + k) % numCols;
            const newRow = (row + Math.floor((col + k) / numCols)) % numRows;
            newGrid[newRow][newCol] = grid[row][col];
        }
    }

    return newGrid;
};

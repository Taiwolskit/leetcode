/**
 * @param {number[][]} grid
 * @return {number}
 */
var uniquePathsIII = function (grid) {
    const rows = grid.length,
        cols = grid[0].length;

    let nonObstacles = 0,
        startRow = 0,
        startCol = 0;
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            const cell = grid[row][col];
            if (cell >= 0) {
                nonObstacles += 1;
            }
            if (cell === 1) {
                startRow = row;
                startCol = col;
            }
        }
    }

    let pathCount = 0;

    const backtrack = (row, col, remain) => {
        if (grid[row][col] === 2 && remain === 1) {
            pathCount += 1;
            return;
        }

        const temp = grid[row][col];
        grid[row][col] = -4;
        remain -= 1;

        for (const [ro, co] of [
            [0, 1],
            [0, -1],
            [1, 0],
            [-1, 0],
        ]) {
            const nextRow = row + ro,
                nextCol = col + co;

            if (
                !(
                    0 <= nextRow &&
                    nextRow < rows &&
                    0 <= nextCol &&
                    nextCol < cols
                )
            ) {
                continue;
            }
            if (grid[nextRow][nextCol] < 0) {
                continue;
            }

            backtrack(nextRow, nextCol, remain);
        }

        grid[row][col] = temp;
    };

    backtrack(startRow, startCol, nonObstacles);
    return pathCount;
};

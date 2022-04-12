/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function (board) {
    const neighbors = [
        [1, 0],
        [1, -1],
        [0, -1],
        [-1, -1],
        [-1, 0],
        [-1, 1],
        [0, 1],
        [1, 1],
    ];

    const rows = board.length,
        cols = board[0].length;
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            let liveNeighbors = 0;
            for (const neighbor of neighbors) {
                const neighborRow = row + neighbor[0];
                const neighborCol = col + neighbor[1];
                if (
                    neighborRow >= 0 &&
                    neighborRow < rows &&
                    neighborCol >= 0 &&
                    neighborCol < cols &&
                    Math.abs(board[neighborRow][neighborCol]) === 1
                ) {
                    liveNeighbors++;
                }
            }
            if (
                board[row][col] === 1 &&
                (liveNeighbors < 2 || liveNeighbors > 3)
            ) {
                board[row][col] = -1;
            } else if (board[row][col] === 0 && liveNeighbors === 3) {
                board[row][col] = 2;
            }
        }
    }

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            board[row][col] = board[row][col] > 0 ? 1 : 0;
        }
    }
};

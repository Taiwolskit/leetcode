/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
    const rows = board.length;
    const cols = board[0].length;

    const dfs = (row, col) => {
        if (row < 0 || col < 0 || row == rows || col == cols) return;
        if (board[row][col] != 'O') return;
        board[row][col] = 'T';
        dfs(row + 1, col);
        dfs(row - 1, col);
        dfs(row, col + 1);
        dfs(row, col - 1);
    };

    for (let row = 0; row < rows; ++row) {
        if (board[row][0] == 'O') {
            dfs(row, 0);
        }

        if (board[row][cols - 1] == 'O') {
            dfs(row, cols - 1);
        }
    }

    for (let col = 0; col < cols; ++col) {
        if (board[0][col] == 'O') {
            dfs(0, col);
        }

        if (board[rows - 1][col] == 'O') {
            dfs(rows - 1, col);
        }
    }

    for (let row = 0; row < rows; ++row) {
        for (let col = 0; col < cols; ++col) {
            if (board[row][col] == 'O') {
                board[row][col] = 'X';
            } else if (board[row][col] == 'T') {
                board[row][col] = 'O';
            }
        }
    }
};

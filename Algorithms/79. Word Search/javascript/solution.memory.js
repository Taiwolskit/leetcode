/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (dfs(board, word, i, j, 0)) {
                return true;
            }
        }
    }
    return false;
};

function dfs(board, word, i, j, k) {
    if (k === word.length) {
        return true;
    }

    if (i < 0 || j < 0 || i >= board.length || j >= board[0].length) {
        return false;
    }

    if (board[i][j] !== word[k]) {
        return false;
    }

    let tmp = board[i][j];
    board[i][j] = '-';
    let canBeVisited =
        dfs(board, word, i + 1, j, k + 1) ||
        dfs(board, word, i - 1, j, k + 1) ||
        dfs(board, word, i, j + 1, k + 1) ||
        dfs(board, word, i, j - 1, k + 1);

    board[i][j] = tmp;
    return canBeVisited;
}

/**
 * @param {number[][]} board
 * @return {number}
 */

var movesToChessboard = function (board) {
    let n = board.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            let t = board[i][j] ^ board[i][0] ^ board[0][j] ^ board[0][0];
            if (t === 1) {
                return -1;
            }
        }
    }
    let rowSum = 0,
        colSum = 0,
        rowSwap = 0,
        colSwap = 0;
    for (let i = 0; i < n; i++) {
        rowSum += board[0][i];
        colSum += board[i][0];
        rowSwap += board[i][0] === i % 2;
        colSwap += board[0][i] === i % 2;
    }

    if (rowSum != Math.floor(n / 2) && rowSum != (n + 1) / 2) {
        return -1;
    }
    if (colSum != Math.floor(n / 2) && colSum != (n + 1) / 2) {
        return -1;
    }

    if (n % 2 === 1) {
        if (colSwap % 2) colSwap = n - colSwap;
        if (rowSwap % 2) rowSwap = n - rowSwap;
    } else {
        colSwap = Math.min(colSwap, n - colSwap);
        rowSwap = Math.min(rowSwap, n - rowSwap);
    }

    return (rowSwap + colSwap) / 2;
};

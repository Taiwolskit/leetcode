/**
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function (moves) {
    const n = 3;
    const rows = new Array(n).fill(0),
        cols = new Array(n).fill(0);
    let player = 1;
    let diagonal = 0,
        antiDiagonal = 0;

    for (const [row, col] of moves) {
        rows[row] += player;
        cols[col] += player;

        if (row === col) {
            diagonal += player;
        }
        if (row + col === n - 1) {
            antiDiagonal += player;
        }

        if (
            Math.abs(rows[row]) === 3 ||
            Math.abs(cols[col]) === 3 ||
            Math.abs(antiDiagonal) === 3 ||
            Math.abs(diagonal) === 3
        ) {
            return player === 1 ? 'A' : 'B';
        }
        player *= -1;
    }

    return moves.length === n ** 2 ? 'Draw' : 'Pending';
};

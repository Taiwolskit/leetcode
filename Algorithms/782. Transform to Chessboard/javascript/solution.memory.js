/**
 * @param {number[][]} board
 * @return {number}
 */
var movesToChessboard = function (board) {
    const boardSz = board.length;
    const evenBoard = boardSz % 2 === 0;

    const possible = () => {
        let numOne = 0,
            numZero = 0;

        let same = '',
            oppo = '';
        board[0].forEach((item) => {
            if (item === 1) {
                numOne++;
                same += '1';
                oppo += '0';
            } else {
                numZero++;
                same += '0';
                oppo += '1';
            }
        });

        if (evenBoard)
            if (numOne != numZero) return false;
            else if (!evenBoard)
                if (Math.abs(numOne - numZero) != 1) return false;

        let sameRow = 0,
            oppoRow = 0;

        for (const row of board) {
            const joinedRow = row.join('');
            if (joinedRow === same) {
                sameRow++;
            } else if (joinedRow === oppo) {
                oppoRow++;
            } else {
                return false;
            }
        }

        if (evenBoard) return sameRow === oppoRow;

        return Math.abs(sameRow - oppoRow) === 1;
    };

    if (!possible()) {
        return -1;
    }

    let rowMove1 = 0;
    let colMove1 = 0;

    let rowMove2 = 0;
    let colMove2 = 0;

    for (let i = 0; i < boardSz; i++) {
        if (board[i][0] === i % 2) {
            rowMove1++;
        } else {
            rowMove2++;
        }

        if (board[0][i] === i % 2) {
            colMove1++;
        } else {
            colMove2++;
        }
    }

    if (rowMove1 + colMove1 === 0 || rowMove2 + colMove2 === 0) return 0;

    if (evenBoard) {
        rowMove1 = Math.min(rowMove1, rowMove2);
        colMove1 = Math.min(colMove1, colMove2);
    } else {
        rowMove1 = rowMove1 % 2 === 0 ? rowMove1 : rowMove2;
        colMove1 = colMove1 % 2 === 0 ? colMove1 : colMove2;
    }

    return (rowMove1 + colMove1) / 2;
};

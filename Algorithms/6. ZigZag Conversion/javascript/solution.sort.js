/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    if (numRows === 1) {
        return s;
    }

    const rows = new Array(numRows).fill('');
    let curRow = 0,
        goingDown = -1;

    for (const c of s) {
        rows[curRow] += c;
        if (curRow === 0 || curRow === numRows - 1) {
            goingDown *= -1;
        }
        curRow += goingDown;
    }

    return rows.join('');
};

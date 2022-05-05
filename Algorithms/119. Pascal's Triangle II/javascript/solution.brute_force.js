/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
    const ans = [];
    for (let i = 0; i <= rowIndex; i++) {
        ans[i] = getNum(rowIndex, i);
    }
    return ans;
};

const getNum = (row, col) => {
    if (col === 0 || col === row || row === 0) {
        return 1;
    }
    return getNum(row - 1, col - 1) + getNum(row - 1, col);
};

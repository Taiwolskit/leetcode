/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
    let curr = [],
        prev = [1];
    for (let i = 1; i <= rowIndex; i++) {
        curr = [1];
        for (let j = 1; j < i; j++) {
            curr[j] = prev[j - 1] + prev[j];
        }
        curr.push(1);
        prev = curr;
    }
    return prev;
};

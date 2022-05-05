/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
    const ans = [1];
    for (let k = 1; k <= rowIndex; k++) {
        ans.push(Math.floor(ans[ans.length - 1] * (rowIndex - k + 1) / k));
    }
    return ans;
};
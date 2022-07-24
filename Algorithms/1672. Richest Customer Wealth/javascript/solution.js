/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
    const sums = accounts.map((account) => account.reduce((acc, curr) => acc + curr));
    return Math.max(...sums);
};

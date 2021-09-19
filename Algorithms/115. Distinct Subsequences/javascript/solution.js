/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function (s, t) {
    const m = t.length,
        n = s.length;
    const memo = new Array(m + 1).fill(0);

    memo[0] = 1;

    for (let i = 1; i < n + 1; i++) {
        let prev = 1;
        for (let j = 1; j < m + 1; j++) {
            let temp = memo[j];
            memo[j] += t[j - 1] === s[i - 1] ? prev : 0;
            prev = temp;
        }
    }

    return memo[m];
};

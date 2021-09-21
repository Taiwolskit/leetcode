/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function (s, t) {
    const m = t.length,
        n = s.length;
    const dp = new Array(m + 1).fill(0);

    dp[0] = 1;

    for (let i = 1; i < n + 1; i++) {
        let prev = 1;
        for (let j = 1; j < m + 1; j++) {
            let temp = dp[j];
            dp[j] += t[j - 1] === s[i - 1] ? prev : 0;
            prev = temp;
        }
    }

    return dp[m];
};

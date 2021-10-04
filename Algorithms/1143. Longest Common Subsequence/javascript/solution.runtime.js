/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
    const m = text1.length,
        n = text2.length;

    const dp = new Uint16Array(m);
    for (let i = 0; i < n; i++) {
        let previous = 0;
        for (let j = 0; j < m; j++) {
            if (text1[j] == text2[i]) {
                [dp[j], previous] = [previous + 1, dp[j]];
            } else {
                previous = dp[j];
                dp[j] = j > 0 ? Math.max(dp[j], dp[j - 1]) : dp[j];
            }
        }
    }
    return dp[m - 1];
};

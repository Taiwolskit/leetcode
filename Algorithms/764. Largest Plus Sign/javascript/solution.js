/**
 * @param {number} n
 * @param {number[][]} mines
 * @return {number}
 */
var orderOfLargestPlusSign = function (n, mines) {
    const banned = {};
    for (let point of mines) {
        const x = point[0];
        const y = point[1];
        if (x in banned) {
            banned[x].push(y);
        } else {
            banned[x] = [y];
        }
    }

    const dp = new Array(n).fill(0).map(() => new Array(n).fill(0));
    let ans = 0;

    for (let r = 0; r < n; r++) {
        let count = 0;
        for (let c = 0; c < n; c++) {
            if (r > 3) {
            }
            if (r in banned && banned[r].includes(c)) {
                count = 0;
            } else {
                count++;
            }
            dp[r][c] = count;
        }

        count = 0;
        for (let c = n - 1; c > -1; c--) {
            if (r in banned && banned[r].includes(c)) {
                count = 0;
            } else {
                count++;
            }
            dp[r][c] = Math.min(dp[r][c], count);
        }
    }

    for (let c = 0; c < n; c++) {
        let count = 0;
        for (let r = 0; r < n; r++) {
            if (r in banned && banned[r].includes(c)) {
                count = 0;
            } else {
                count++;
            }
            dp[r][c] = Math.min(dp[r][c], count);
        }

        count = 0;
        for (let r = n - 1; r > -1; r--) {
            if (r in banned && banned[r].includes(c)) {
                count = 0;
            } else {
                count++;
            }
            dp[r][c] = Math.min(dp[r][c], count);
            ans = Math.max(dp[r][c], ans);
        }
    }
    return ans;
};

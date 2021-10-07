/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    let m, n;
    let dp = [];
    let visited = {};

    const backtrack = (w, i, j) => {
        visited[i] = visited[i] || {};
        if (w === 0) {
            if (visited[i][j] || board[i][j] !== word[w]) {
                return false;
            }
            return true;
        }

        if (visited[i][j] === true) {
            return false;
        }

        visited[i][j] = true;
        let valid = false;
        if (i - 1 >= 0 && dp[w - 1][i - 1][j] === w) {
            valid ||= backtrack(w - 1, i - 1, j);
        }
        if (i + 1 < m && dp[w - 1][i + 1][j] === w) {
            valid ||= backtrack(w - 1, i + 1, j);
        }
        if (j - 1 >= 0 && dp[w - 1][i][j - 1] === w) {
            valid ||= backtrack(w - 1, i, j - 1);
        }
        if (j + 1 < n && dp[w - 1][i][j + 1] === w) {
            valid ||= backtrack(w - 1, i, j + 1);
        }
        visited[i][j] = false;
        return valid;
    };

    const search = (w, i, j) => {
        let up = 0,
            down = 0,
            left = 0,
            right = 0;
        if (i - 1 >= 0) {
            up = dp[w - 1][i - 1][j];
        }
        if (i + 1 < m) {
            down = dp[w - 1][i + 1][j];
        }
        if (j - 1 >= 0) {
            left = dp[w - 1][i][j - 1];
        }
        if (j + 1 < n) {
            right = dp[w - 1][i][j + 1];
        }
        return Math.max(up, down, left, right);
    };

    m = board.length;
    n = board[0].length;
    dp = [];

    for (let w = 0; w < word.length; w++) {
        dp.push([]);
        for (let i = 0; i < m; i++) {
            dp[w].push([]);
            for (let j = 0; j < n; j++) {
                dp[w][i].push(0);
                if (w === 0 && word[0] === board[i][j]) {
                    dp[w][i][j] = 1;
                }
            }
        }
    }

    for (let w = 1; w < word.length; w++) {
        for (let i = 0; i < m; i++) {
            for (let j = 0; j < n; j++) {
                if (board[i][j] === word[w]) {
                    const value = search(w, i, j) + 1;
                    dp[w][i][j] = value === w + 1 ? w + 1 : 0;
                }
            }
        }
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (dp[word.length - 1][i][j] === word.length) {
                visited = {};
                const valid = backtrack(word.length - 1, i, j);
                if (valid) {
                    return true;
                }
            }
        }
    }

    return false;
};

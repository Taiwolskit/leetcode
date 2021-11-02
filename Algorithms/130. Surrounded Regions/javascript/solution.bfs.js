/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
    const N = board.length;
    if (!N) return;
    const M = board[0].length;
    const visit = Array(N)
        .fill(null)
        .map((i) => Array(M).fill(false));
    const dx = [1, -1, 0, 0],
        dy = [0, 0, 1, -1];

    function BFS(i, j) {
        visit[i][j] = true;
        const queue = [[i, j]];
        while (queue.length) {
            let [x, y] = queue.shift();
            for (let d = 0; d < 4; d++) {
                let nx = x + dx[d],
                    ny = y + dy[d];
                if (-1 < nx && nx < N && -1 < ny && ny < M) {
                    if (!visit[nx][ny] && board[nx][ny] == 'O') {
                        visit[nx][ny] = true;
                        queue.push([nx, ny]);
                    }
                }
            }
        }
    }

    for (let i = 0; i < N; i++) {
        if (!visit[i][0] && board[i][0] == 'O') BFS(i, 0);
        if (!visit[i][M - 1] && board[i][M - 1] == 'O') BFS(i, M - 1);
    }
    for (let j = 1; j < M - 1; j++) {
        if (!visit[0][j] && board[0][j] == 'O') BFS(0, j);
        if (!visit[N - 1][j] && board[N - 1][j] == 'O') BFS(N - 1, j);
    }
    for (let i = 1; i < N - 1; i++) {
        for (let j = 1; j < M - 1; j++) {
            if (!visit[i][j] && board[i][j] == 'O') board[i][j] = 'X';
        }
    }
};

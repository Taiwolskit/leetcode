class Solution {
    fun solve(board: Array<CharArray>): Unit {
        if (board.isEmpty() || board[0].isEmpty()) return

        val m = board.size
        val n = board[0].size

        fun dfs(x: Int, y: Int, symbol: Char) {
            if (x < 0 || x >= m || y < 0 || y >= n || board[x][y] != 'O') return

            board[x][y] = symbol

            dfs(x + 1, y, symbol)
            dfs(x - 1, y, symbol)
            dfs(x, y + 1, symbol)
            dfs(x, y - 1, symbol)
        }

        for (j in 0..n - 2) dfs(0, j, '#')
        for (i in 0..m - 2) dfs(i, n - 1, '#')
        for (j in n - 1 downTo 1) dfs(m - 1, j, '#')
        for (i in m - 1 downTo 1) dfs(i, 0, '#')

        for (i in 1..m - 2) {
            for (j in 1..n - 2) {
                dfs(i, j, 'X')
            }
        }

        for (i in 0..m - 1) {
            for (j in 0..n - 1) {
                if (board[i][j] == '#') {
                    board[i][j] = 'O'
                }
            }
        }
    }
}

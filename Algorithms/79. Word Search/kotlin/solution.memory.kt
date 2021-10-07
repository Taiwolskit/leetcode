class Solution {
    fun exist(board: Array<CharArray>, word: String): Boolean {
        for (i in board.indices) {
            for (j in board[i].indices) {
                if (dfs(board, i, j, word, 0)) {
                    return true
                }
            }
        }
        return false
    }

    private fun dfs(board: Array<CharArray>, i: Int, j: Int, word: String, k: Int): Boolean {
        if (k == word.length) return true
        if (i !in board.indices) return false
        if (j !in board[0].indices) return false
        if (board[i][j] != word[k]) return false
        board[i][j] = ' '

        return if (dfs(board, i - 1, j, word, k + 1) ||
                    dfs(board, i + 1, j, word, k + 1) ||
                    dfs(board, i, j - 1, word, k + 1) ||
                    dfs(board, i, j + 1, word, k + 1)
        ) {
            true
        } else {
            board[i][j] = word[k]
            false
        }
    }
}

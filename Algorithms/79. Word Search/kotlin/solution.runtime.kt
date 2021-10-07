class Solution {

    fun exist(board: Array<CharArray>, word: String): Boolean {
        val start = word[0]
        board.forEachIndexed { i, row ->
            row.forEachIndexed { j, letter ->
                if (letter == start) {
                    val visited = mutableSetOf<Pair<Int, Int>>()
                    val wordFound = dp(board = board, word = word, charAtIndex = 0, i = i, j = j)
                    if (wordFound) {
                        return wordFound
                    }
                }
            }
        }
        return false
    }

    private fun dp(
            board: Array<CharArray>,
            word: String,
            charAtIndex: Int,
            i: Int,
            j: Int
    ): Boolean {
        if (charAtIndex == word.length) return true
        if (i < 0 || j < 0 || i >= board.size || j >= board[0].size) return false
        val letterToLookFor = word[charAtIndex]
        val letter = board[i][j]
        if (letter != letterToLookFor) return false
        board[i][j] = '!'

        val checkDown =
                dp(board = board, word = word, charAtIndex = charAtIndex + 1, i = i + 1, j = j)
        if (checkDown) return checkDown
        val checkRight =
                dp(board = board, word = word, charAtIndex = charAtIndex + 1, i = i, j = j + 1)
        if (checkRight) return checkRight
        val checkUp =
                dp(board = board, word = word, charAtIndex = charAtIndex + 1, i = i - 1, j = j)
        if (checkUp) return checkUp
        val checkleft =
                dp(board = board, word = word, charAtIndex = charAtIndex + 1, i = i, j = j - 1)
        if (checkleft) return checkleft

        board[i][j] = letter
        return false
    }
}

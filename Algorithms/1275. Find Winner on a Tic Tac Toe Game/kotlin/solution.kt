class Solution {
    fun tictactoe(A: Array<IntArray>): String {
        val n = 3
        val rows = IntArray(n)
        val cols = IntArray(n)
        var diag = 0
        var secDiag = 0
        var isATurn = true
        var moves = 0
        for (row in A) {
            val (x, y) = row
            moves++
            if (isATurn) {
                rows[x]++
                cols[y]++
                if (x == y) diag++
                if (x + y == n - 1) secDiag++
            } else {
                rows[x]--
                cols[y]--
                if (x == y) diag--
                if (x + y == n - 1) secDiag--
            }
            if (rows[x] == n || cols[y] == n || diag == n || secDiag == n) return "A"
            else if (rows[x] == -n || cols[y] == -n || diag == -n || secDiag == -n) return "B"
            isATurn = isATurn.not()
        }
        if (moves == 9) return "Draw"
        return "Pending"
    }
}

class Solution {
    private fun isSquareNumber(num: Int): Boolean {
        val sqrt = Math.sqrt(num.toDouble()).toInt()
        return num == sqrt * sqrt
    }
    fun numSquares(n: Int): Int {
        var num = n
        while (num % 4 == 0) num /= 4
        if (num % 8 == 7) return 4

        if (isSquareNumber(n)) return 1
        num = 1
        while (n > num * num) {
            if (isSquareNumber(n - (num * num))) return 2
            num++
        }
        return 3
    }
}

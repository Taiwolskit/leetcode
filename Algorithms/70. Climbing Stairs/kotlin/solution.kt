class Solution {
    fun climbStairs(n: Int): Int {
        return when {
            n < 2 -> n
            else -> {
                var first = 1
                var second = 2

                for (i in 3..n) {
                    val temp = first + second
                    first = second
                    second = temp
                }

                second
            }
        }
    }
}

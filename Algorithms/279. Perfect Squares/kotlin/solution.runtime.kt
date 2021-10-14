class Solution {
    fun numSquares(n: Int): Int {

        val k = Math.sqrt(n.toDouble()).toInt()

        val dp = IntArray(n + 1) { n + 1 }
        dp[0] = 0

        for (i in 1..n) {
            for (j in 1..k) {
                val s = j * j
                val res = i - s

                if (res >= 0) {
                    if (dp[res] + 1 < dp[i]) {
                        dp[i] = dp[res] + 1
                    }
                } else {
                    break
                }
            }
        }

        return dp[n]
    }
}

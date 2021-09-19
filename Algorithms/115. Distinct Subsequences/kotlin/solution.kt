class Solution {
    fun numDistinct(s: String, t: String): Int {
        val lenS = s.length
        val lenT = t.length

        val dp = Array(lenS + 1) { IntArray(lenT + 1) { idxT -> if (idxT == 0) 1 else 0 } }
        for (idxS in 1..lenS) {
            for (idxT in 1..lenT) {
                dp[idxS][idxT] =
                    if (s[idxS - 1] == t[idxT - 1]) {
                        dp[idxS - 1][idxT] + dp[idxS - 1][idxT - 1]
                    } else {
                        dp[idxS - 1][idxT]
                    }
            }
        }

        return dp[lenS][lenT]
    }
}

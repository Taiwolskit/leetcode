class Solution {
    fun longestPalindrome(s: String): String {
        val expandStr = "^#" + s.toCharArray().joinToString("#") + "#$"
        val n = expandStr.length
        val P = IntArray(n)
        var center = 0
        var right = 0
        for (i in 1 until n - 1) {
            val iMirror = 2 * center - i
            if (right > i) {
                P[i] = Math.min(right - i, P[iMirror])
            }
            while (expandStr[i + 1 + P[i]] == expandStr[i - 1 - P[i]]) {
                P[i]++
            }
            if (i + P[i] > right) {
                center = i
                right = i + P[i]
            }
        }
        val maxLen = P.max() ?: 0
        val centerIndex = P.indexOf(maxLen)
        return s.substring((centerIndex - maxLen) / 2, (centerIndex + maxLen) / 2)
    }
}

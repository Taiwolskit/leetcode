class Solution {
    fun longestPalindrome(s: String): String {
        if (s.length <= 1) return s

        var newS = CharArray(2 * s.length + 1, {Char.MIN_VALUE})
        for (i in 0..s.length-1) {
            newS[i * 2 + 1] = s.get(i)
        }

        var len = IntArray(newS.size, {0})
        len[0] = 1
        var maxRight = 0
        var center = 0
        var max = 0
        var pos = 0
        for (i in 1..newS.size-1) {
            if (i < maxRight) {
                len[i] = Math.min(len[2 * center - i], maxRight - i)
            } else {
                len[i] = 1
            }

            while(i - len[i] >= 0 && i + len[i] < newS.size) {
                if (newS[i - len[i]] == newS[i + len[i]]) {
                    len[i] = len[i] + 1
                } else {
                    break
                }
            }
            if (i + len[i] - 1 > maxRight) {
                maxRight = i + len[i] - 1
                center = i
            }
            if (len[i] > max) {
                max = len[i]
                pos = i
            }
        }
        return s.substring(pos / 2 - (max - 1) / 2, pos / 2 - (max - 1) / 2 + max - 1)
    }
}
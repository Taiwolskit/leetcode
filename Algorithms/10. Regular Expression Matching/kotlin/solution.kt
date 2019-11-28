class Solution {
    fun isMatch(s: String, p: String): Boolean {
        var ls = s.length
        var lp = p.length
        var isMatch = Array(ls + 1){BooleanArray(lp + 1)}
        isMatch[0][0] = true

        for (i in 2..lp) {
            if (p[i-1] == '*') {
                isMatch[0][i] = isMatch[0][i-2]
            }
        }

        for (j in 1..ls) {
            for (i in 1..lp) {
                if (s[j-1] == p[i-1] || p[i-1] == '.') {
                    isMatch[j][i] = isMatch[j-1][i-1]
                } else if (p[i-1] == '*') {
                    isMatch[j][i] = i > 1 && (isMatch[j][i-2]) || ((s[j-1] == p[i-2] || p[i-2] == '.') && isMatch[j-1][i])
                }
            }
        }

        return isMatch[ls][lp]
    }
}
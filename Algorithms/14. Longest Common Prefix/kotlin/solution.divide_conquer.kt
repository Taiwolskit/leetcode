class Solution {
    fun longestCommonPrefix(strs: Array<String>): String {
        if (strs.isEmpty()) return ""
        return longestPrefix(strs, 0, strs.size - 1)
    }

    fun longestPrefix(strs: Array<String>, l: Int, r: Int): String {
        if (l == r) return strs[l]
        val mid = (l + r) / 2
        val lcpLeft = longestPrefix(strs, l, mid)
        val lcpRight = longestPrefix(strs, mid + 1, r)
        return commonPrefix(lcpLeft, lcpRight)
    }

    fun commonPrefix(left: String, right: String): String {
        var minLen = Math.min(left.length, right.length)
        for (i in 0 until minLen) {
            if (left[i] != right[i]) {
                return left.substring(0, i)
            }
        }
        return left.substring(0, minLen)
    }
}

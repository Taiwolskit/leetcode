class Solution {
    fun longestCommonPrefix(strs: Array<String>): String {
        if (strs.isEmpty()) return ""
        var low = 1
        var hight = strs[0].length
        for (i in 1 until strs.size) {
            hight = Math.min(hight, strs[i].length)
        }
        while (low <= hight) {
            val mid = (low + hight) / 2
            if (isCommonPrefix(strs, mid)) {
                low = mid + 1
            } else {
                hight = mid - 1
            }
        }
        return strs[0].substring(0, (low + hight) / 2)
    }

    private fun isCommonPrefix(strs: Array<String>, length: Int): Boolean {
        var str1 = strs[0].substring(0, length)
        for (i in 1 until strs.size) {
            if (strs[i].substring(0, length) != str1) return false
        }
        return true
    }
}

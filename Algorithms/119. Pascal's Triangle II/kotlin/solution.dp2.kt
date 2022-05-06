class Solution {
    fun getRow(rowIndex: Int): List<Int> {
        val ans = MutableList<Int>(rowIndex + 1) { 1 }
        for (i in 0..rowIndex) {
            for (j in (i - 1) downTo 1) {
                ans[j] = ans[j] + ans[j - 1]
            }
        }
        return ans
    }
}

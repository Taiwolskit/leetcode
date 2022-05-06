class Solution {
    fun getRow(rowIndex: Int): List<Int> {
        val ans = arrayListOf(1)
        for (k in 1..rowIndex) {
            val toAdd = ans.last().toLong() * (rowIndex - k + 1) / k
            ans.add(toAdd.toInt())
        }
        return ans
    }
}

class Solution {
    fun getRow(rowIndex: Int): List<Int> {
        val ans = ArrayList<Int>()
        for (i in 0..rowIndex) {
            ans.add(getNum(rowIndex, i))
        }
        return ans
    }

    fun getNum(row: Int, col: Int): Int {
        if (row == 0 || col == 0 || row == col) {
            return 1
        }
        return getNum(row - 1, col - 1) + getNum(row - 1, col)
    }
}
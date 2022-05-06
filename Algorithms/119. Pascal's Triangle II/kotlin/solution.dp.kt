class Solution {
    fun getRow(rowIndex: Int): List<Int> {
        if (rowIndex == 0) return listOf(1)

        var prev = ArrayList<Int>(1)
        for (i in 1..rowIndex) {
            val curr = ArrayList<Int>()
            curr.add(1)
            for (j in 1..i) {
                curr.add(prev[j - 1] + prev[j])
            }
            curr.add(1)
            prev = curr
        }
        return prev
    }
}

class Solution {
    fun heightChecker(heights: IntArray): Int {
        val sortedHeights: Array<Int> = heights.sortedArray()
        var count: Int = 0
        for (i in heights.indices) {
            if (heights[i] != sortedHeights[i]) {
                count++
            }
        }
        return count
    }
}

class Solution {
    fun searchMatrix(matrix: Array<IntArray>, target: Int): Boolean {
        if (matrix.isEmpty()) return false
        val m = matrix.size
        val n = matrix[0].size
        var left = 0
        var right = m * n - 1
        while (left <= right) {
            val pivotIdx = (right + left) / 2
            val pivotElement = matrix[pivotIdx / n][pivotIdx % n]
            if (pivotElement == target) {
                return true
            } else if (pivotElement < target) {
                left = pivotIdx + 1
            } else {
                right = pivotIdx - 1
            }
        }
    }
}

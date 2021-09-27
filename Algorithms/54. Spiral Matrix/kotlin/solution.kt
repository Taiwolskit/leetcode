class Solution {
    fun spiralOrder(matrix: Array<IntArray>): List<Int> {
        val order = mutableListOf<Int>()
        if (matrix.isEmpty()) {
            return order
        }

        var startRow = 0
        var endRow = matrix.size - 1
        var startColumn = 0
        var endColumn = matrix[0].size - 1

        while (startRow <= endRow && startColumn <= endColumn) {
            // Right
            for (column in startColumn..endColumn) {
                order.add(matrix[startRow][column])
            }

            // Down
            for (row in startRow + 1..endRow) {
                order.add(matrix[row][endColumn])
            }

            // Left
            for (column in endColumn - 1 downTo startColumn) {
                if (startRow == endRow) break
                order.add(matrix[endRow][column])
            }

            // Up
            for (row in endRow - 1 downTo startRow + 1) {
                if (startColumn == endColumn) break
                order.add(matrix[row][startColumn])
            }

            startRow++
            endRow--
            startColumn++
            endColumn--
        }

        return order
    }
}

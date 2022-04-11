class Solution {
    fun shiftGrid(grid: Array<IntArray>, k: Int): List<List<Int>> {
        val newGrid = mutableListOf<MutableList<Int>>()
        val numRows = grid.size
        val numCols = grid[0].size
        val total = numRows * numCols
        val sub = k % total

        for (b in 0..numRows - 1) newGrid.add(mutableListOf<Int>())
        for (a in 0..total - 1) {
            val idx = (a - sub + total) % total
            newGrid.get(a / numCols).add(grid[idx / numCols][idx % numCols])
        }

        return newGrid
    }
}

class Solution {
    var totalPaths = 0

    fun uniquePathsIII(grid: Array<IntArray>): Int {
        val rows = grid.size
        val cols = grid[0].size

        var numEmptyCells = 0
        var startPosition: Pair<Int, Int> = 0 to 0

        for (r in 0 until rows) {
            for (c in 0 until cols) {
                when (grid[r][c]) {
                    1 -> {
                        startPosition = r to c
                    }
                    0 -> {
                        numEmptyCells++
                    }
                }
            }
        }

        totalPaths = 0
        dfs(grid, startPosition.first, startPosition.second, 0, numEmptyCells)
        return totalPaths
    }

    private fun dfs(
            grid: Array<IntArray>,
            r: Int,
            c: Int,
            emptyCellsTraversed: Int,
            emptyCellsTarget: Int
    ) {
        if (r < 0 || c < 0 || r >= grid.size || c >= grid[0].size || grid[r][c] < 0) {
            return
        }
        if (grid[r][c] == 2) {
            if (emptyCellsTraversed - 1 == emptyCellsTarget) {
                totalPaths++
            }
            return
        }
        grid[r][c] = -1
        dfs(grid, r, c + 1, emptyCellsTraversed + 1, emptyCellsTarget)
        dfs(grid, r, c - 1, emptyCellsTraversed + 1, emptyCellsTarget)
        dfs(grid, r + 1, c, emptyCellsTraversed + 1, emptyCellsTarget)
        dfs(grid, r - 1, c, emptyCellsTraversed + 1, emptyCellsTarget)
        grid[r][c] = 0
    }
}

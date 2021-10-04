class Solution {
    fun islandPerimeter(grid: Array<IntArray>): Int {
        var perimeter = 0
        for (i in grid.indices) {
            for (j in grid[i].indices) {
                if (grid[i][j] == 1) {
                    perimeter += 4
                    if (i > 0 && grid[i - 1][j] == 1) {
                        perimeter -= 2
                    }
                    if (j > 0 && grid[i][j - 1] == 1) {
                        perimeter -= 2
                    }
                }
            }
        }
        return perimeter
    }
}

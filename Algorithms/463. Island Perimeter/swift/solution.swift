class Solution {
    func islandPerimeter(_ grid: [[Int]]) -> Int {
        var perimeter = 0
        for ridx in 0..<grid.count {
            for cidx in 0..<grid[0].count {
                if grid[ridx][cidx] == 0 { continue }

                let prev = cidx > 0 && grid[ridx][cidx - 1] == 1 ? 2 : 0
                let top = ridx > 0 && grid[ridx - 1][cidx ] == 1 ? 2 : 0

                perimeter += 4 - (prev + top)
            }
        }
        return perimeter
    }
}

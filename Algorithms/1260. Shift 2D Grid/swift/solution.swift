class Solution {
  func shiftGrid(_ grid: [[Int]], _ k: Int) -> [[Int]] {
    let numRows = grid.count
    let numCols = grid[0].count
    var newGrid = [[Int]](repeating: [Int](repeating: 0, count: numCols), count: numRows)
    for row in 0..<numRows {
      for col in 0..<numCols {
        let newCol = (col + k) % numCols
        let newRow = (row + ((col + k) / numCols)) % numRows
        newGrid[newRow][newCol] = grid[row][col]
      }
    }

    return newGrid
  }
}

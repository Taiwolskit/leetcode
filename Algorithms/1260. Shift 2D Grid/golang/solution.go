func shiftGrid(grid [][]int, k int) [][]int {
	numRows := len(grid)
	numCols := len(grid[0])
	var newGrid [][]int

	for row := 0; row < numRows; row++ {
		var newRow []int
		for col := 0; col < numCols; col++ {
			idx := row*numCols + col - k
			for idx < 0 {
				idx += numCols * numRows
			}

			newRow = append(newRow, grid[idx/numCols][idx%numCols])
		}
		newGrid = append(newGrid, newRow)
	}
	return newGrid
}

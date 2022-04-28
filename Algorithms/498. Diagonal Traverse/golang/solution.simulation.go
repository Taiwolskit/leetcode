func findDiagonalOrder(mat [][]int) []int {
	var (
		N         int = len(mat)
		M         int = len(mat[0])
		row       int = 0
		column    int = 0
		direction int = 1
		result    []int
	)

	for row < N && column < M {
		result = append(result, mat[row][column])
		var newRow, newColumn int
		if direction == 1 {
			newRow = row - 1
			newColumn = column + 1
		} else {
			newRow = row + 1
			newColumn = column - 1
		}

		if newRow < 0 || newRow >= N || newColumn < 0 || newColumn >= M {
			if direction > 0 {
				if column == M-1 {
					row += 1
				}
				if column < M-1 {
					column += 1
				}
			} else {
				if row == N-1 {
					column += 1
				}
				if row < N-1 {
					row += 1
				}
			}

			direction = 1 - direction
		} else {
			row = newRow
			column = newColumn
		}
	}

	return result
}

func gameOfLife(board [][]int) {
	neighbors := [][]int{
		{1, 0}, {1, -1}, {0, -1}, {-1, -1},
		{-1, 0}, {-1, 1}, {0, 1}, {1, 1},
	}

	var rows int = len(board)
	var cols int = len(board[0])

	for row := 0; row < rows; row++ {
		for col := 0; col < cols; col++ {
			liveNeighbors := 0
			for _, neighbor := range neighbors {
				r := row + neighbor[0]
				c := col + neighbor[1]

				if (r >= 0 && r < rows) && (c >= 0 && c < cols) && (board[r][c] == 1 || board[r][c] == -1) {
					liveNeighbors++
				}
			}

			if board[row][col] == 1 && (liveNeighbors < 2 || liveNeighbors > 3) {
				board[row][col] = -1
			} else if board[row][col] == 0 && liveNeighbors == 3 {
				board[row][col] = 2
			}
		}
	}

	for row := 0; row < rows; row++ {
		for col := 0; col < cols; col++ {
			if board[row][col] > 0 {
				board[row][col] = 1
			} else {
				board[row][col] = 0
			}
		}
	}
}

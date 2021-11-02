func solve(board [][]byte) {
	m := len(board)
	n := len(board[0])

	if m == 1 || n == 1 {
		return
	}

	idx := []int{0, m - 1}
	for _, k := range idx {
		for i := range board[k] {
			if board[k][i] == 'O' {
				dfs(board, m, n, k, i)
			}
		}
	}
	idx = []int{0, n - 1}
	for _, k := range idx {
		for i := range board {
			if board[i][k] == 'O' {
				dfs(board, m, n, i, k)
			}
		}
	}

	for i := 0; i < m; i += 1 {
		for j := 0; j < n; j += 1 {
			if board[i][j] == '.' {
				board[i][j] = 'O'
			} else if board[i][j] == 'O' {
				board[i][j] = 'X'
			}
		}
	}
}

func dfs(board [][]byte, rows, cols, r, c int) {
	board[r][c] = '.'

	dirs := [][]int{{-1, 0}, {1, 0}, {0, -1}, {0, 1}}
	for i := range dirs {
		rr := r + dirs[i][0]
		cc := c + dirs[i][1]
		if rr < 0 || rr >= rows || cc < 0 || cc >= cols || board[rr][cc] != 'O' {
			continue
		}
		dfs(board, rows, cols, rr, cc)
	}
}

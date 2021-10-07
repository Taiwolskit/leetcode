func findele(board [][]byte, visited [][]bool, s byte, i, j, m, n int) bool {
	if i < 0 || i >= m || j < 0 || j >= n || visited[i][j] {
		return false
	}
	if board[i][j] == s {
		return true
	}
	return false
}

func neigh(board [][]byte, visited [][]bool, word []byte, cur, i, j, m, n int) bool {
	if cur == len(word) {
		return true
	}
	res := false

	for row := i - 1; row < i+2; row++ {
		for col := j - 1; col < j+2; col++ {
			if row == i || col == j {

				if findele(board, visited, word[cur], row, col, m, n) {
					visited[row][col] = true
					res = (res || neigh(board, visited, word, cur+1, row, col, m, n))
					if res {
						return res
					}
					visited[row][col] = false
				}
			}
		}

	}
	return res
}

func exist(board [][]byte, word string) bool {
	m, n := len(board), len(board[0])
	wordb := []byte(word)
	visited := make([][]bool, m)

	for row := 0; row < m; row++ {
		visited[row] = make([]bool, n)
		for col := 0; col < n; col++ {
			visited[row][col] = false
		}
	}

	res := false
	for row := 0; row < m; row++ {
		for col := 0; col < n; col++ {
			if board[row][col] == wordb[0] {
				visited[row][col] = true
				res = (res || neigh(board, visited, wordb, 1, row, col, m, n))
				if res {
					return res
				}
				visited[row][col] = false
			}
		}

	}

	return res
}

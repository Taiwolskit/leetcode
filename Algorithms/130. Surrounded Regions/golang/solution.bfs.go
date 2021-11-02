type coordinate struct {
	x, y int
}

func bfs(c coordinate, board [][]byte) {
	var q []coordinate
	board[c.x][c.y] = '1'
	q = append(q, c)

	for len(q) != 0 {
		e := q[0]
		q = q[1:]
		for _, v := range []coordinate{
			{e.x - 1, e.y},
			{e.x + 1, e.y},
			{e.x, e.y - 1},
			{e.x, e.y + 1}} {
			if v.x >= 0 && v.x < len(board) && v.y >= 0 && v.y < len(board[v.x]) && board[v.x][v.y] == 'O' {
				board[v.x][v.y] = '1'
				q = append(q, v)
			}
		}
	}
}

func solve(board [][]byte) {
	for i := 0; i < len(board); i++ {
		if i == 0 || i == (len(board)-1) {
			for j := 0; j < len(board[i]); j++ {
				if board[i][j] == 'O' {
					bfs(coordinate{i, j}, board)
				}
			}
		} else {
			for _, j := range []int{0, len(board[i]) - 1} {
				if board[i][j] == 'O' {
					bfs(coordinate{i, j}, board)
				}
			}
		}
	}

	for i := 0; i < len(board); i++ {
		for j := 0; j < len(board[i]); j++ {
			switch board[i][j] {
			case 'O':
				board[i][j] = 'X'
			case '1':
				board[i][j] = 'O'
			}
		}
	}
}

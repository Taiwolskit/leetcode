func spiralOrder(matrix [][]int) []int {
	ordered := append([]int{}, matrix[0]...)
	m, n := len(matrix), len(matrix[0])
	total := m * n

	dir, pos, movement := 0, []int{0, n - 1}, [][]int{{1, 0}, {0, -1}, {-1, 0}, {0, 1}}
	for len(ordered) < total {
		for i := 1; i < m; i++ {
			pos[0] += movement[dir][0]
			pos[1] += movement[dir][1]

			ordered = append(ordered, matrix[pos[0]][pos[1]])
		}

		m--
		m, n = n, m

		dir = (dir + 1) % 4
	}

	return ordered
}

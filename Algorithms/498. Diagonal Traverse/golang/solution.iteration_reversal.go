func findDiagonalOrder(mat [][]int) []int {
	var (
		N            int = len(mat)
		M            int = len(mat[0])
		result       []int
		intermediate []int
	)

	for d := 0; d < N+M-1; d++ {
		intermediate = []int{}
		var r, c int

		if d < M {
			r, c = 0, d
		} else {
			r, c = d-M+1, M-1
		}

		for r < N && c >= 0 {
			intermediate = append(intermediate, mat[r][c])
			r++
			c--
		}

		if d%2 == 0 {
			for j := len(intermediate) - 1; j >= 0; j-- {
				result = append(result, intermediate[j])
			}
		} else {
			result = append(result, intermediate...)
		}
	}

	return result
}

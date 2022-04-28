func findDiagonalOrder(mat [][]int) []int {
	d := [][]int{}
	for i := 0; i < len(mat); i++ {
		for j := 0; j < len(mat[i]); j++ {
			if i+j < len(d) {
				d[i+j] = append(d[i+j], mat[i][j])
			} else {
				d = append(d, []int{mat[i][j]})
			}
		}
	}

	result := []int{}
	for idx, values := range d {
		if idx%2 == 0 {
			for j := len(values) - 1; j >= 0; j-- {
				result = append(result, values[j])
			}
		} else {
			result = append(result, values...)
		}
	}
	return result
}

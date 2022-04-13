func generateMatrix(n int) [][]int {
	if n == 0 {
		return [][]int{}
	}

	result := make([][]int, n)
	for i := range result {
		result[i] = make([]int, n)
	}

	var top, bottom, left, right int = 0, n - 1, 0, n - 1
	var cnt, layerRange int = 1, n * n
	for cnt <= layerRange {
		for i := left; i <= right && cnt <= layerRange; i++ {
			result[top][i] = cnt
			cnt++
		}
		top++

		for i := top; i <= bottom && cnt <= layerRange; i++ {
			result[i][right] = cnt
			cnt++
		}
		right--

		for i := right; i >= left && cnt <= layerRange; i-- {
			result[bottom][i] = cnt
			cnt++
		}
		bottom--

		for i := bottom; i >= top && cnt <= layerRange; i-- {
			result[i][left] = cnt
			cnt++
		}
		left++
	}

	return result
}

func generateMatrix(n int) [][]int {
	result := make([][]int, n)
	for i := range result {
		result[i] = make([]int, n)
	}
	var cnt int = 1
	for layer := 0; layer < (n+1)/2; layer++ {
		for i := layer; i < n-layer; i++ {
			result[layer][i] = cnt
			cnt++
		}
		for i := layer + 1; i < n-layer; i++ {
			result[i][n-layer-1] = cnt
			cnt++
		}
		for i := n - layer - 2; i >= layer; i-- {
			result[n-layer-1][i] = cnt
			cnt++
		}
		for i := n - layer - 2; i > layer; i-- {
			result[i][layer] = cnt
			cnt++
		}
	}
	return result
}

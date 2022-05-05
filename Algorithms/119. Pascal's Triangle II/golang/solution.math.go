func getRow(rowIndex int) []int {
	var ans = []int{1}
	for k := 1; k <= rowIndex; k++ {
		ans = append(ans, int(ans[len(ans)-1]*(rowIndex-k+1)/k))
	}
	return ans
}

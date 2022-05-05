func getRow(rowIndex int) []int {
	var ans = make([]int, rowIndex+1)
	for i := 0; i < len(ans); i++ {
		ans[i] = 1
	}
	for i := 1; i < rowIndex; i++ {
		for j := i; j > 0; j-- {
			ans[j] += ans[j-1]
		}
	}
	return ans
}

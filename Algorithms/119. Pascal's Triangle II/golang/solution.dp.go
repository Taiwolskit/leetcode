func getRow(rowIndex int) []int {
	var curr []int
	var prev = []int{1}
	for i := 1; i <= rowIndex; i++ {
		curr = []int{1}
		for j := 1; j < i; j++ {
			curr = append(curr, prev[j-1]+prev[j])
		}
		curr = append(curr, 1)
		prev = curr
	}
	return prev
}

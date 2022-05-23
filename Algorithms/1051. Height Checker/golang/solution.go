func heightChecker(heights []int) int {
	sorted := make([]int, len(heights))
	copy(sorted, heights)
	sort.Ints(heights)

	var result int
	for i := range heights {
		if heights[i] != sorted[i] {
			result++
		}
	}
	return result
}
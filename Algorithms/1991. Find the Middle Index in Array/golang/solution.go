func findMiddleIndex(nums []int) int {
	var (
		left  int
		right int
	)
	for _, val := range nums {
		right += val
	}

	for i, val := range nums {
		right -= val
		if left == right {
			return i
		}
		left += val
	}
	return -1
}

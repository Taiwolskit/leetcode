func pivotIndex(nums []int) int {
	var S int = 0
	for _, v := range nums {
		S += v
	}
	var leftsum int = 0
	for i, x := range nums {
		if leftsum == S-leftsum-x {
			return i
		}
		leftsum += x
	}
	return -1
}
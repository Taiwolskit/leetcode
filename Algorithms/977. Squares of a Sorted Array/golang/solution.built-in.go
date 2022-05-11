func sortedSquares(nums []int) []int {
	for i, val := range nums {
		nums[i] = val * val
	}
	sort.Ints(nums)
	return nums
}
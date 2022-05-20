func sortArrayByParity(nums []int) []int {
	sort.Slice(nums, func(i, j int) bool {
		return nums[i]%2 < nums[j]%2
	})
	return nums
}
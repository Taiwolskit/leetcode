func sortArrayByParity(nums []int) []int {
	for i, j := 0, len(nums)-1; i < j; {
		if nums[i]%2 > nums[j]%2 {
			nums[i], nums[j] = nums[j], nums[i]
		}
		if nums[i]%2 == 0 {
			i++
		}
		if nums[j]%2 == 1 {
			j--
		}
	}
	return nums
}
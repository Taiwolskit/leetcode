func sortArrayByParityII(nums []int) []int {
	length := len(nums)
	even_idx := 0
	odd_idx := 1

	for even_idx < length && odd_idx < length {
		if nums[even_idx]%2 == 0 {
			even_idx += 2
		} else if nums[odd_idx]%2 == 1 {
			odd_idx += 2
		} else {
			nums[even_idx], nums[odd_idx] = nums[odd_idx], nums[even_idx]
		}
	}
	return nums
}

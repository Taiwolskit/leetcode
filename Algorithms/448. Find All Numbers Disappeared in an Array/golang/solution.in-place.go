func findDisappearedNumbers(nums []int) []int {
	for _, num := range nums {
		var newIndex int = num
		if num < 0 {
			newIndex = -num
		}
		newIndex--

		if nums[newIndex] > 0 {
			nums[newIndex] *= -1
		}
	}

	var result []int
	for i, num := range nums {
		if num > 0 {
			result = append(result, i+1)
		}
	}
	return result
}
func removeDuplicates(nums []int) int {
	var i int = 0
	if len(nums) == 0 {
		return i
	}

	for j := 1; j < len(nums); j++ {
		if nums[i] != nums[j] {
			i++
			nums[i] = nums[j]
		}
	}

	return i + 1
}

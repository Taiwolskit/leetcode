func moveZeroes(nums []int) {
	var lastNonZeroFoundAt int = 0
	for i := 0; i < len(nums); i++ {
		if nums[i] != 0 {
			nums[lastNonZeroFoundAt] = nums[i]
			lastNonZeroFoundAt++
		}
	}
	for i := lastNonZeroFoundAt; i < len(nums); i++ {
		nums[i] = 0
	}
}
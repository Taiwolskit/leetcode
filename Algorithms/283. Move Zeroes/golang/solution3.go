func moveZeroes(nums []int) {
	var lastNonZeroFoundAt int = 0
	for i, num := range nums {
		if num != 0 {
			nums[lastNonZeroFoundAt], nums[i] = num, nums[lastNonZeroFoundAt]
			lastNonZeroFoundAt++
		}
	}
}
func rotate(nums []int, k int) {
	k = k % len(nums)
	for i := 0; i < k; i++ {
		previous := nums[len(nums)-1]
		for j := 0; j < len(nums); j++ {
			nums[j], previous = previous, nums[j]
		}
	}
}
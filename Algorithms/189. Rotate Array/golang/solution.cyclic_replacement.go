func rotate(nums []int, k int) {
	var n int = len(nums)
	k = k % n

	var start int = 0
	var count int = 0
	for count < n {
		current, prev := start, nums[start]
		for current != start {
			nextIdx := (current + k) % n
			nums[nextIdx], prev = prev, nums[nextIdx]
			current = nextIdx
			count++
		}

		start++
	}
}
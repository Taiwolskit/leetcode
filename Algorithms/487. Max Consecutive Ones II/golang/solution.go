func findMaxConsecutiveOnes(nums []int) int {
	var prev, curr, maxLen int = -1, 0, 0

	for _, num := range nums {
		if num == 0 {
			prev, curr = curr, 0
		} else {
			curr++
		}

		if prev+1+curr > maxLen {
			maxLen = prev + 1 + curr
		}
	}

	return maxLen
}
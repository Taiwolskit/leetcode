func findMaxConsecutiveOnes(nums []int) int {
	result := 0
	count := 0
	for _, num := range nums {
		if num == 1 {
			count++
			if result < count {
				result = count
			}
		} else {
			count = 0
		}
	}
	return result
}

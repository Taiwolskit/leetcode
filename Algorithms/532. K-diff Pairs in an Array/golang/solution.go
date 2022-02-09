func findPairs(nums []int, k int) int {
	counter := map[int]int{}
	for _, num := range nums {
		counter[num]++
	}

	result := 0
	for num, count := range counter {
		if (k > 0 && counter[num+k] != 0) || (k == 0 && count > 1) {
			result++
		}
	}
	return result
}

func subarraySum(nums []int, k int) int {
	count := 0
	sum := 0
	m := map[int]int{
		0: 1,
	}
	for _, num := range nums {
		sum += num
		if val, ok := m[sum-k]; ok {
			count += val
		}
		m[sum]++
	}

	return count
}

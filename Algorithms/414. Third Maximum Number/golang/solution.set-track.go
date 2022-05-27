func thirdMax(nums []int) int {
	maximums := make(map[int]bool)
	for _, num := range nums {
		maximums[num] = true
		if len(maximums) > 3 {
			delete(maximums, min(maximums))
		}
	}
	if len(maximums) < 3 {
		return max(maximums)
	}
	return min(maximums)
}

func min(nums map[int]bool) int {
	var minimum int = int(^uint(0) >> 1)
	for num := range nums {
		if minimum > num {
			minimum = num
		}
	}
	return minimum
}

func max(nums map[int]bool) int {
	var maximum int = -int(^uint(0)>>1) - 1
	for num := range nums {
		if num > maximum {
			maximum = num
		}
	}
	return maximum
}
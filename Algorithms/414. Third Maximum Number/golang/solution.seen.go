func thirdMax(nums []int) int {
	seenMaximums := make(map[int]bool)

	for i := 0; i < 3; i++ {
		currentMaximum := maximumIgnoringSeenMaximums(nums, seenMaximums)
		if currentMaximum == -int(^uint(0)>>1)-1 {
			return max(seenMaximums)
		}
		seenMaximums[currentMaximum] = true
	}

	return min(seenMaximums)
}

func maximumIgnoringSeenMaximums(nums []int, seenMaximums map[int]bool) int {
	var maximum int = -int(^uint(0)>>1) - 1
	for _, num := range nums {
		if _, ok := seenMaximums[num]; ok {
			continue
		}
		if num > maximum {
			maximum = num
		}
	}
	return maximum
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
func dominantIndex(nums []int) int {
	if len(nums) == 0 {
		return -1
	}

	var (
		largest       int = -1
		secondLargest int = -1
		maxIndex      int
	)

	for i, val := range nums {
		if val >= largest {
			secondLargest = largest
			largest = val
			maxIndex = i
		} else if val > secondLargest {
			secondLargest = val
		}
	}

	if largest >= secondLargest*2 {
		return maxIndex
	}
	return -1
}

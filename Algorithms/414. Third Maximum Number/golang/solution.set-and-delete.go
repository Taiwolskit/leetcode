func thirdMax(nums []int) int {
	setNum := make(map[int]bool)
	var maximum int = -int(^uint(0)>>1) - 1
	for _, num := range nums {
		setNum[num] = true
		if num > maximum {
			maximum = num
		}
	}

	if len(setNum) < 3 {
		return maximum
	}

	delete(setNum, maximum)
	var secondMaximum int = max(setNum)
	delete(setNum, secondMaximum)
	return max(setNum)
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
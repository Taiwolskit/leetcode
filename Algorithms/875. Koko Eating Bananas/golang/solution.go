func minEatingSpeed(piles []int, h int) int {
	left := 1
	right := 0
	for _, pile := range piles {
		if pile > right {
			right = pile
		}
	}

	for left < right {
		middle := (left + right) / 2
		hourSpent := 0

		for _, pile := range piles {
			hourSpent += int(math.Ceil(float64(pile) / float64(middle)))
		}

		if h >= hourSpent {
			right = middle
		} else {
			left = middle + 1
		}
	}

	return right
}

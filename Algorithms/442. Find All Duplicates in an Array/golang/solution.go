func findDuplicates(a []int) []int {
	ans := make([]int, 0)
	for _, currentNumber := range a {
		rightIndex := abs(currentNumber) - 1
		if a[rightIndex] < 0 {
			ans = append(ans, rightIndex+1)
		} else {
			a[rightIndex] *= -1
		}
	}
	return ans
}

func abs(a int) int {
	if a < 0 {
		return a * -1
	}
	return a
}

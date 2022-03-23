func brokenCalc(startValue int, target int) int {
	var ans int
	for target > startValue {
		ans++
		if target%2 == 1 {
			target++
		} else {
			target /= 2
		}
	}
	return ans + startValue - target
}

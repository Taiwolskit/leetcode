func lengthOfLongestSubstring(s string) int {
	lastPosition := map[rune]int{}
	max := 0
	previous := 0

	for i, c := range s {
		ignore := i - previous

		if last, ok := lastPosition[c]; ok && last >= ignore {
			previous = i - last
		} else {
			previous++
		}

		lastPosition[c] = i

		if previous > max {
			max = previous
		}
	}

	return max
}
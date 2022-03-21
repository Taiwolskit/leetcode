func partitionLabels(s string) []int {
	last := make(map[rune]int)
	for i, c := range s {
		last[c] = i
	}

	var anchor int = -1
	var j int
	var ans []int

	for i, c := range s {
		if last[c] > j {
			j = last[c]
		}

		if i == j {
			ans = append(ans, i-anchor)
			anchor = i
		}
	}
	return ans
}

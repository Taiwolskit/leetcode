func lengthOfLongestSubstring(s string) int {
	location := make([]int, 128)

	for i := range location {
		location[i] = -1
	}

	start := 0
	maxLen := 0
	for i := 0; i < len(s); i++ {
		if location[s[i]] >= start {
			start = location[s[i]] + 1
		}

		diff := i - start + 1
		if diff >= maxLen {
			maxLen = diff
		}

		location[s[i]] = i
	}

	return maxLen
}
import "strings"

func lengthOfLongestSubstring(s string) int {
	if len(s) < 2 {
		return len(s)
	}

	count := 1
	maxcount := 1
	i := 0
	for j := 1; i < len(s) && j < len(s); {
		if strings.Contains(s[i:j], s[j:j+1]) {
			if count > maxcount {
				maxcount = count
			}

			count = 1
			i += 1
			j = i + 1
		} else {
			count += 1
			j += 1
		}
	}

	if count > maxcount {
		maxcount = count
	}
	return maxcount
}
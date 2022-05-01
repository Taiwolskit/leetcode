func longestCommonPrefix(strs []string) string {
	if len(strs) == 0 {
		return ""
	}
	return longestPrefix(strs, 0, len(strs)-1)
}

func longestPrefix(strs []string, start int, end int) string {
	if start == end {
		return strs[start]
	}

	mid := (start + end) / 2
	left := longestPrefix(strs, start, mid)
	right := longestPrefix(strs, mid+1, end)
	return commonPrefix(left, right)
}

func commonPrefix(left string, right string) string {
	var minLen int
	if len(left) > len(right) {
		minLen = len(right)
	} else {
		minLen = len(left)
	}
	for i := 0; i < minLen; i++ {
		if left[i] != right[i] {
			return left[:i]
		}
	}
	return left[:minLen]
}
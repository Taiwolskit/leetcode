func longestPalindrome(s string) string {
	expand_str := "^#" + strings.Join(strings.Split(s, ""), "#") + "#$"
	n := len(expand_str)
	P := make([]int, n)
	center, right := 0, 0
	for i := 1; i < n-1; i++ {
		i_mirror := 2*center - i
		if right > i {
			P[i] = min(right-i, P[i_mirror])
		}
		for expand_str[i+(1+P[i])] == expand_str[i-(1+P[i])] {
			P[i]++
		}
		if i+P[i] > right {
			center, right = i, i+P[i]
		}
	}
	maxLen, centerIndex := 0, 0
	for i := 0; i < n; i++ {
		if P[i] > maxLen {
			maxLen = P[i]
			centerIndex = i
		}
	}
	return strings.Replace(s[(centerIndex-maxLen)/2:(centerIndex+maxLen)/2], "#", "", -1)
}

func min(x, y int) int {
	if x < y {
		return x
	}
	return y
}

func longestPalindrome(s string) string {
	var expandStr string = "#"
	for _, c := range s {
		expandStr += string(c) + "#"
	}
	var maxLen int = len(expandStr)
	var P []int = make([]int, maxLen)
	var center int = 0
	var right int = 0
	for i := 0; i < maxLen; i++ {
		var mirror int = 2*center - i
		if mirror < 0 {
			mirror = 0
		}
		if right > i {
			P[i] = P[mirror]
			if P[mirror] > right-i {
				P[i] = right - i
			}
		}
		for i-P[i] >= 0 && i+P[i] < maxLen && expandStr[i-P[i]] == expandStr[i+P[i]] {
			P[i]++
		}
		if i+P[i] > right {
			center = i
			right = i + P[i]
		}
	}
	var maxIndex int = 0
	for i, v := range P {
		if v > P[maxIndex] {
			maxIndex = i
		}
	}
	var start int = (maxIndex - P[maxIndex] + 1) / 2
	return s[start : start+P[maxIndex]-1]
}

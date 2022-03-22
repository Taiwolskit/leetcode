func lengthOfLongestSubstring(s string) int {
	var ans int
	var mp = make(map[rune]int)

	var i int
	for j, c := range s {
		if val := mp[c]; val > 0 {
			i = max(val, i)
		}
		ans = max(ans, j-i+1)
		mp[c] = j + 1
	}
	return ans
}

func max(x int, y int) int {
	if x > y {
		return x
	}
	return y
}

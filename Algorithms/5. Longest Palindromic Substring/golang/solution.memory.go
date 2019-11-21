func longestPalindrome(s string) string {
	ans := ""
	exp := func(s string, l int, r int) {
		for l >= 0 && r < len(s) && s[l] == s[r] {
			l--
			r++
		}

		if r-l-1 > len(ans) {
			ans = s[l+1 : r]
		}
	}

	for i := range s {
		exp(s, i, i)
		exp(s, i, i+1)
	}
	return ans
}
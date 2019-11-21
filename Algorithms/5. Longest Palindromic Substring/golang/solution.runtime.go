func longestPalindrome(s string) string {
	size := len(s)
	if size < 2 {
		return s
	}
	li, ri := 0, 0

	for i, _ := range s {
		l, r := i, i
		if ri-li+1 == len(s) {
			return s
		}

		for l >= 0 && r < size {
			if l == i && r+1 < size && s[i] == s[r+1] {
				r++
				if r-l > ri-li {
					ri = r
					li = l
				}
				continue
			}

			if s[l] != s[r] {
				break
			}

			if r-l > ri-li {
				ri = r
				li = l
			}
			r++
			l--
		}
	}

	return s[li : ri+1]
}
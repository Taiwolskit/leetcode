func reverseString(s []byte) {
	l := len(s) / 2
	for i := 0; i < l; i++ {
		s[i], s[len(s)-i-1] = s[len(s)-i-1], s[i]
	}
}

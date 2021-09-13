func shiftingLetters(s string, shifts []int) string {
	acum := 0
	ans := make([]byte, len(s))
	for i := len(s) - 1; i >= 0; i-- {
		acum = (acum + shifts[i]) % 26
		ans[i] = 97 + (s[i]+byte(acum)-97)%26
	}
	return string(ans)
}

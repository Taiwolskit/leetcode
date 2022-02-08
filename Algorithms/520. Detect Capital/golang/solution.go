func detectCapitalUse(word string) bool {
	n := len(word)
	if n == 1 {
		return true
	}

	if unicode.ToUpper(rune(word[0])) == rune(word[0]) && unicode.ToUpper(rune(word[1])) == rune(word[1]) {
		for i := 2; i < n; i++ {
			if !(unicode.ToUpper(rune(word[i])) == rune(word[i])) {
				return false
			}
		}
	} else {
		for i := 1; i < n; i++ {
			if unicode.ToUpper(rune(word[i])) == rune(word[i]) {
				return false
			}
		}
	}
	return true
}

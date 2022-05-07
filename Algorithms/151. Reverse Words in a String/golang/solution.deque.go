func reverseWords(s string) string {
	var left, right int = 0, len(s) - 1

	for left <= right && s[left] == ' ' {
		left++
	}
	for left <= right && s[right] == ' ' {
		right--
	}

	res := make([]string, 0)
	word := []byte{}
	for i := left; i <= right; i++ {
		if s[i] == ' ' && len(word) > 0 {
			res = append([]string{string(word)}, res...)
			word = []byte{}
		} else if s[i] != ' ' {
			word = append(word, s[i])
		}
	}

	res = append([]string{string(word)}, res...)
	return strings.Join(res, " ")
}
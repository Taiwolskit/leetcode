func reverseWords(s string) string {
	var result []string
	var word string
	for _, c := range s {
		if c == ' ' {
			result = append(result, word)
			word = ""
		} else {
			word = string(c) + word
		}
	}
	result = append(result, word)
	return strings.Join(result, " ")
}

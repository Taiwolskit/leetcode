func reverseWords(s string) string {
	var words []string
	for _, word := range strings.Split(s, " ") {
		words = append(words, reverse(word))
	}
	return strings.Join(words, " ")
}

func reverse(s string) string {
	runes := []rune(s)
	for i, j := 0, len(runes)-1; i < j; i, j = i+1, j-1 {
		runes[i], runes[j] = runes[j], runes[i]
	}
	return string(runes)
}
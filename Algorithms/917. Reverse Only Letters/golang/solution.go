import "strings"

func isLetter(b byte) bool {
	return (b >= 'a' && b <= 'z') || (b >= 'A' && b <= 'Z')
}

func reverseOnlyLetters(s string) string {
	letters := []byte{}
	for i := range s {
		if isLetter(s[i]) {
			letters = append([]byte{s[i]}, letters...)
		}
	}
	var res strings.Builder
	j := 0
	for i := range s {
		if !isLetter(s[i]) {
			res.WriteByte(s[i])
		} else {
			res.WriteByte(letters[j])
			j++
		}
	}
	return res.String()
}

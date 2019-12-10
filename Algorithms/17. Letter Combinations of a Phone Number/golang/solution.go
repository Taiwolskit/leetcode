func nextDigit(k int, digits string, dict map[byte]string, paren []byte, answer []string) []string {
	if k == len(digits) {
		return append(answer, string(paren))
	}

	digit := digits[k]
	chars := dict[digit]
	for i := range chars {
		paren[k] = chars[i]
		answer = nextDigit(k+1, digits, dict, paren, answer)
	}

	return answer
}

func letterCombinations(digits string) []string {
	var answer []string

	if len(digits) == 0 {
		return answer
	}

	paren := make([]byte, len(digits))
	dict := make(map[byte]string)
	dict['2'] = "abc"
	dict['3'] = "def"
	dict['4'] = "ghi"
	dict['5'] = "jkl"
	dict['6'] = "mno"
	dict['7'] = "pqrs"
	dict['8'] = "tuv"
	dict['9'] = "wxyz"

	return nextDigit(0, digits, dict, paren, answer)
}
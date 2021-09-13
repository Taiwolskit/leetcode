func maxNumberOfBalloons(text string) int {
	letterCnt := make(map[rune]int)

	for _, rn := range text {
		letterCnt[rn]++
	}

	letterCnt['l'] /= 2
	letterCnt['o'] /= 2

	output := math.MaxInt32
	for _, rn := range "balon" {
		if letterCnt[rn] < output {
			output = letterCnt[rn]
		}
	}

	return output
}

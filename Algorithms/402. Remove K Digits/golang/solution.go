func removeKdigits(num string, k int) string {
	numStack := []rune{}

	for _, digit := range num {
		for k > 0 && len(numStack) > 0 && numStack[len(numStack)-1] > digit {
			numStack = numStack[:len(numStack)-1]
			k--
		}

		numStack = append(numStack, digit)
	}

	for k > 0 {
		numStack = numStack[:len(numStack)-1]
		k--
	}

	for len(numStack) > 0 && numStack[0] == '0' {
		numStack = numStack[1:len(numStack)]
	}

	if len(numStack) == 0 {
		return "0"
	}
	return string(numStack)
}

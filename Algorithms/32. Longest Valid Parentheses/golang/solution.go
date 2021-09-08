func longestValidParentheses(s string) int {
	max := 0
	left := 0
	right := 0

	for i := 0; i < len(s); i++ {
		if s[i] == '(' {
			left++
		} else {
			right++
		}

		if left == right {
			if left+right > max {
				max = right + left
			}
		} else if right > left {
			right = 0
			left = 0
		}
	}

	left = 0
	right = 0
	for i := len(s) - 1; i >= 0; i-- {
		if s[i] == '(' {
			left++
		} else {
			right++
		}

		if left == right {
			if left+right > max {
				max = right + left
			}
		} else if left > right {
			right = 0
			left = 0
		}
	}
	return max
}

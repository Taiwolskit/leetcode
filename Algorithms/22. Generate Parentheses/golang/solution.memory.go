func generateParenthesis(n int) []string {
	return backtrack([]string{}, "", 0, 0, n)
}

func backtrack(ans []string, cur string, left, right, max int) []string {
	if len(cur) == max*2 {
		ans = append(ans, cur)
		return ans
	}

	if max > left {
		ans = backtrack(ans, cur+"(", left+1, right, max)
	}

	if left > right {
		ans = backtrack(ans, cur+")", left, right+1, max)
	}

	return ans
}

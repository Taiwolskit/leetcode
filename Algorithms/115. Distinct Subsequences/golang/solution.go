func numDistinct(s string, t string) int {
	if len(s) < len(t) {
		return 0
	}

	m, n := len(s), len(t)
	dp := make([]int, n+1)
	dp[0] = 1
	for i := 1; i <= m; i++ {
		for j := min(i, n); j > 0; j-- {
			if s[i-1] == t[j-1] {
				dp[j] += dp[j-1]
			}
		}
	}
	return dp[n]
}

func min(x, y int) int {
	if x < y {
		return x
	}
	return y
}

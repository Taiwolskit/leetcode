func longestCommonSubsequence(text1 string, text2 string) int {
	m, n := len(text1), len(text2)

	if n > m {
		text1, text2 = text2, text1
		m, n = n, m
	}

	dp := make([]int, n+1)

	for i := 1; i <= m; i++ {
		upLeft := 0

		for j := 1; j <= n; j++ {
			temp := dp[j]

			if text1[i-1] == text2[j-1] {
				dp[j] = 1 + upLeft
			} else {
				dp[j] = max(dp[j], dp[j-1])
			}

			upLeft = temp
		}
	}

	return dp[n]
}

func max(a, b int) int {
	if a > b {
		return a
	}

	return b
}

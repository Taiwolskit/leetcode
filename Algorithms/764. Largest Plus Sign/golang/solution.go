func orderOfLargestPlusSign(n int, mines [][]int) int {
	dp := make([][]int, n)
	for i := range dp {
		dp[i] = make([]int, n)
	}

	for _, m := range mines {
		dp[m[0]][m[1]] = -1
	}

	for r := 0; r < n; r++ {
		cnt := 1
		for c := 0; c < n; c++ {
			if dp[r][c] == -1 {
				cnt = 1
				continue
			}
			dp[r][c] = cnt
			cnt++
		}
		cnt = 1
		for c := n - 1; c >= 0; c-- {
			if dp[r][c] == -1 {
				cnt = 1
				continue
			}
			dp[r][c] = min(dp[r][c], cnt)
			cnt++
		}
	}

	ret := 0
	for c := 0; c < n; c++ {
		cnt := 1
		for r := 0; r < n; r++ {
			if dp[r][c] == -1 {
				cnt = 1
				continue
			}
			dp[r][c] = min(dp[r][c], cnt)
			cnt++
		}
		cnt = 1
		for r := n - 1; r >= 0; r-- {
			if dp[r][c] == -1 {
				cnt = 1
				continue
			}
			dp[r][c] = min(dp[r][c], cnt)
			cnt++
			ret = max(ret, dp[r][c])
		}
	}
	return ret
}

func min(a, b int) int {
	if a > b {
		return b
	}
	return a
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}

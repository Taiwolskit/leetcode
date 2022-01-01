func maxCoins(nums []int) int {
	nums = append(append([]int{1}, nums...), 1)
	n := len(nums)

	dp := make([][]int, n)
	for i := range dp {
		dp[i] = make([]int, n)
	}

	for i := 1; i <= n; i++ {
		for j := 0; j+i-1 < n; j++ {
			for k := j + 1; k < j+i-1; k++ {
				gain := nums[j] * nums[k] * nums[j+i-1]
				remaining := dp[j][k] + dp[k][j+i-1]

				if dp[j][j+i-1] < gain+remaining {
					dp[j][j+i-1] = gain + remaining
				}
			}
		}
	}
	return dp[0][n-1]
}

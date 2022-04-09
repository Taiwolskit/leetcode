func findJudge(n int, trust [][]int) int {
	if len(trust) == 0 {
		if n == 1 {
			return 1
		} else {
			return -1
		}
	}

	trustScores := make([]int, n+1)
	for _, v := range trust {
		trustScores[v[0]]--
		trustScores[v[1]]++
	}
	for i, v := range trustScores {
		if v == n-1 {
			return i
		}
	}
	return -1
}

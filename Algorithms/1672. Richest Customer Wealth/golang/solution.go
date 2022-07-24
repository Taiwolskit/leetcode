func maximumWealth(accounts [][]int) int {
	var max int
	for _, account := range accounts {
		sum := 0
		for _, wealth := range account {
			sum += wealth
		}
		if sum > max {
			max = sum
		}
	}
	return max
}
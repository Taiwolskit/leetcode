func maxProfit(prices []int) int {
	profitOne := 0
	profitTwo := 0
	for i := 1; i < len(prices); i++ {
		tmp := profitOne
		profitOne = max(profitOne+prices[i]-prices[i-1], profitTwo)
		profitTwo = max(tmp, profitTwo)
	}
	return max(profitOne, profitTwo)
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}

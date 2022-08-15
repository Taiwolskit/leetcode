func minCostClimbingStairs(cost []int) int {
	var minimumCost []int = make([]int, len(cost)+1)
	for i := 0; i < len(cost); i++ {
		minimumCost[i] = 0
	}
	for i := 2; i <= len(cost); i++ {
		var takeOneStep int = minimumCost[i-1] + cost[i-1]
		var takeTwoStep int = minimumCost[i-2] + cost[i-2]
		if takeOneStep < takeTwoStep {
			minimumCost[i] = takeOneStep
		} else {
			minimumCost[i] = takeTwoStep
		}
	}
	return minimumCost[len(cost)]
}
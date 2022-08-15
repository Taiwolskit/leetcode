func minCostClimbingStairs(cost []int) int {
	var downOne int = 0
	var downTwo int = 0
	for i := 2; i <= len(cost); i++ {
		var temp int = downOne
		if downOne+cost[i-1] < downTwo+cost[i-2] {
			downOne += cost[i-1]
		} else {
			downOne = downTwo + cost[i-2]
		}
		downTwo = temp
	}
	return downOne
}

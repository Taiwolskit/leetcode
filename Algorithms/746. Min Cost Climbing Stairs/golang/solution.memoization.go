func minCostClimbingStairs(cost []int) int {
	var memo map[int]int = make(map[int]int)
	return minimumCost(cost, memo, len(cost))
}

func minimumCost(cost []int, memo map[int]int, i int) int {
	if i <= 1 {
		return 0
	}

	if val, ok := memo[i]; ok {
		return val
	}

	var downOne int = minimumCost(cost, memo, i-1) + cost[i-1]
	var downTwo int = minimumCost(cost, memo, i-2) + cost[i-2]
	if downOne > downTwo {
		memo[i] = downTwo
	} else {
		memo[i] = downOne
	}
	return memo[i]
}
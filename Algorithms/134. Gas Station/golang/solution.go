func canCompleteCircuit(gas []int, cost []int) int {
	totalTank := 0
	currTank := 0
	startStation := 0

	for i := 0; i < len(gas); i++ {
		totalTank += gas[i] - cost[i]
		currTank += gas[i] - cost[i]

		if currTank < 0 {
			startStation = i + 1
			currTank = 0
		}
	}

	if totalTank >= 0 {
		return startStation
	}
	return -1
}

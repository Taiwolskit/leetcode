func numberOfSteps(num int) int {
	if num == 0 {
		return 0
	}

	var steps, powerOfTwo int = 0, 1
	for powerOfTwo <= num {
		if num&powerOfTwo > 0 {
			steps++
		}
		steps++
		powerOfTwo *= 2
	}
	return steps - 1
}
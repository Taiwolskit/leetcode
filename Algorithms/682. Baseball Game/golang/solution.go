func calPoints(ops []string) int {
	var stack []int
	for _, op := range ops {
		switch op {
		case "+":
			stack = append(stack, stack[len(stack)-1]+stack[len(stack)-2])
		case "C":
			stack = stack[:(len(stack) - 1)]
		case "D":
			stack = append(stack, stack[len(stack)-1]*2)
		default:
			x, _ := strconv.Atoi(op)
			stack = append(stack, x)
		}
	}

	result := 0
	for _, v := range stack {
		result += v
	}
	return result
}

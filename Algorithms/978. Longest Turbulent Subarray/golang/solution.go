func maxTurbulenceSize(arr []int) int {
	inc := 1
	dec := 1
	res := 1
	for i := 1; i < len(arr); i++ {
		if arr[i-1] > arr[i] {
			dec = inc + 1
			inc = 1
		} else if arr[i-1] < arr[i] {
			inc = dec + 1
			dec = 1
		} else {
			inc = 1
			dec = 1
		}
		res = max(res, max(dec, inc))
	}
	return res
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}

func replaceElements(arr []int) []int {
	mx := -1
	for i := len(arr) - 1; i >= 0; i-- {
		if arr[i] > mx {
			arr[i], mx = mx, arr[i]
		} else {
			arr[i] = mx
		}
	}
	return arr
}
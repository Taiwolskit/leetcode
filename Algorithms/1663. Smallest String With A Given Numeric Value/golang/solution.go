func getSmallestString(n int, k int) string {
	result := make([]byte, n)

	for i := n - 1; i >= 0; i-- {
		add := k - i
		if add > 26 {
			add = 26
		}
		result[i] = byte(add + 'a' - 1)
		k -= add
	}
	return string(result)
}

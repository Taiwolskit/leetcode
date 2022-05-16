func checkIfExist(arr []int) bool {
	seen := make(map[float64]bool)
	for _, v := range arr {
		V := float64(v)
		if seen[V*2.0] || seen[V/2.0] {
			return true
		}
		seen[V] = true
	}
	return false
}
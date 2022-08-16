func firstUniqChar(s string) int {
	count := make([]int, 26)
	for _, v := range s {
		count[v-'a']++
	}
	for i, v := range s {
		if count[v-'a'] == 1 {
			return i
		}
	}
	return -1
}
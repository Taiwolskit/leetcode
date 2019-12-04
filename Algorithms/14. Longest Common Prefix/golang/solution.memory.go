func longestCommonPrefix(strs []string) string {
	if len(strs) == 1 {
		return strs[0]
	}

	pref := ""
	min_len := -1
	for i := 0; i < len(strs); i++ {
		if min_len == -1 || len(strs[i]) < min_len {
			min_len = len(strs[i])
		}
	}

	for i := 0; i < min_len; i++ {
		for j := 1; j < len(strs); j++ {
			if strs[j][i] != strs[0][i] {
				pref = strs[0][:i]
				i = -1
				break
			} else if i == min_len-1 {
				pref = strs[0][:min_len]
			}
		}
		if i == -1 {
			break
		}
	}
	return pref
}
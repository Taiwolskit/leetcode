func longestCommonPrefix(strs []string) string {
	if len(strs) == 0 {
		return ""
	}
	var low int = 1
	var hight int = len(strs[0])
	for i := 1; i < len(strs); i++ {
		if len(strs[i]) < hight {
			hight = len(strs[i])
		}
	}

	for low <= hight {
		mid := (low + hight) / 2
		if isCommonPrefix(strs, mid) {
			low = mid + 1
		} else {
			hight = mid - 1
		}
	}

	return strs[0][:(low+hight)/2]
}

func isCommonPrefix(strs []string, length int) bool {
	var str1 string = strs[0][:length]
	for _, str := range strs[1:] {
		if strings.Index(str, str1) != 0 {
			return false
		}
	}
	return true
}
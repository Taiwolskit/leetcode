func addOperators(num string, target int) []string {
	var ret = []string{}
	var buf = make([]byte, len(num)*2) // shared bytes buffer

	search(num, target, &ret, 0, 0, buf, 0)
	return ret
}

// `l` is the length of valid content in `buf`
func search(num string, target int, ret *[]string, sum, diff int, buf []byte, l int) {
	if len(num) == 0 {
		if sum == target {
			*ret = append(*ret, string(buf[0:l]))
		}
		return
	}

	var n = 0
	// try all valid digit combinations
	for i := 0; i < len(num); i++ {
		n = n*10 + int(num[i]-'0')
		var digits = num[0 : i+1]

		if l == 0 {
			copy(buf[l:], digits)
			search(num[i+1:], target, ret, sum+n, n, buf, l+i+1)
		} else {
			copy(buf[l+1:], digits) // one copy for the three operators

			buf[l] = '+'
			search(num[i+1:], target, ret, sum+n, n, buf, l+1+i+1) // add `1 operator + (i+1) digits` to the length of buffer

			buf[l] = '-'
			search(num[i+1:], target, ret, sum-n, -n, buf, l+1+i+1)

			buf[l] = '*'
			search(num[i+1:], target, ret, sum-diff+diff*n, diff*n, buf, l+1+i+1)
		}

		if i == 0 && num[i] == '0' { // skip any number starts with 0
			break
		}
	}
}

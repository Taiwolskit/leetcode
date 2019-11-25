func myAtoi(str string) int {
	l := len(str)
	if l == 0 {
		return 0
	}
	sign := 1
	var i int
	for i = 0; i < l; i++ {
		if str[i] == ' ' {
			continue
		}
		if str[i] == '+' {
			i++
			break
		}
		if str[i] == '-' {
			sign = -1
			i++
			break
		}
		if str[i] < '0' || str[i] > '9' {
			return 0
		}
		break
	}
	res := 0
	for ; i < l; i++ {
		if str[i] < '0' || '9' < str[i] {
			break
		}
		res = res*10 + int(str[i]-'0')
		if res > math.MaxInt32 {
			if sign == 1 {
				return math.MaxInt32
			}
			return -math.MaxInt32 - 1
		}
	}
	return sign * res
}
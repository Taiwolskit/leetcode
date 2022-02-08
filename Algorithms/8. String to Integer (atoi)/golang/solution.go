func myAtoi(s string) int {
	var (
		sign      int64 = +1
		seenSign  bool
		seenDigit bool
		result    int64
	)

	for _, r := range s {
		if '0' <= r && r <= '9' {
			seenSign = true
			seenDigit = true
			newResult := sign * (result*10 + int64(r-'0'))
			if newResult < math.MinInt32 {
				return math.MinInt32
			}
			if newResult > math.MaxInt32 {
				return math.MaxInt32
			}
			result = sign * newResult
		} else if r == ' ' {
			if seenSign || seenDigit {
				break
			}
			continue
		} else if r == '+' {
			if seenSign || seenDigit {
				break
			}
			seenSign = true
			sign = +1
		} else if r == '-' {
			if seenSign || seenDigit {
				break
			}
			seenSign = true
			sign = -1
		} else {
			break
		}
	}
	return int(sign * result)
}

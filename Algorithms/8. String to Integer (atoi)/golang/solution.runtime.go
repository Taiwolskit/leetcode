import "math"

func myAtoi(str string) int {
	var (
		ans   int64
		start bool
		sign  = 1
	)

	for _, v := range str {
		if '0' <= v && v <= '9' {
			start = true
			ans = ans*10 + int64(v-'0')
			if ans >= math.MaxInt32+1 {
				break
			}
		} else if !start && v == ' ' {
			continue
		} else if !start && v == '+' {
			start = true
		} else if !start && v == '-' {
			sign = -sign
			start = true
		} else {
			break
		}
	}

	ans *= int64(sign)

	if ans > math.MaxInt32 {
		ans = math.MaxInt32
	}

	if ans < math.MinInt32 {
		ans = math.MinInt32
	}

	return int(ans)
}
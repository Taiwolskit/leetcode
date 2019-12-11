import "math"

func myAtoi(str string) int {
	base := 0
	sign := 1
	start := true
	if len(str) == 0 {
		return 0
	}
	for _, k := range str {
		var c int
		c, sign, start = checkNumber(k, sign, start)
		if c == -10 && !start {
			return base
		}
		if c == -10 && start {
			continue
		}
		base = base*10 + sign*c
		if base > math.MaxInt32 {
			base = math.MaxInt32
		}
		if base < math.MinInt32 {
			base = math.MinInt32
		}

	}
	return base
}

func checkNumber(str rune, sign int, start bool) (int, int, bool) {
	if str == '+' && start {
		return 0, 1, false
	}
	if str == '-' && start {
		return 0, -1, false
	}
	switch str {
	case '0':
		return 0, sign, false
	case '1':
		return 1, sign, false
	case '2':
		return 2, sign, false
	case '3':
		return 3, sign, false
	case '4':
		return 4, sign, false
	case '5':
		return 5, sign, false
	case '6':
		return 6, sign, false
	case '7':
		return 7, sign, false
	case '8':
		return 8, sign, false
	case '9':
		return 9, sign, false
	}
	if str != ' ' {
		start = false
	}
	return -10, sign, start
}
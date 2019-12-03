func romanToInt(s string) int {
	ans := 0
	i := len(s) - 1
	for i >= 0 {
		switch s[i] {
		case 'M':
			if i-1 >= 0 && s[i-1] == 'C' {
				ans = ans + 900
				i = i - 2
			} else {
				ans = ans + 1000
				i = i - 1
			}
		case 'D':
			if i-1 >= 0 && s[i-1] == 'C' {
				ans = ans + 400
				i = i - 2
			} else {
				ans = ans + 500
				i = i - 1
			}
		case 'C':
			if i-1 >= 0 && s[i-1] == 'X' {
				ans = ans + 90
				i = i - 2
			} else {
				ans = ans + 100
				i = i - 1
			}
		case 'L':
			if i-1 >= 0 && s[i-1] == 'X' {
				ans = ans + 40
				i = i - 2
			} else {
				ans = ans + 50
				i = i - 1
			}
		case 'X':
			if i-1 >= 0 && s[i-1] == 'I' {
				ans = ans + 9
				i = i - 2
			} else {
				ans = ans + 10
				i = i - 1
			}
		case 'V':
			if i-1 >= 0 && s[i-1] == 'I' {
				ans = ans + 4
				i = i - 2
			} else {
				ans = ans + 5
				i = i - 1
			}
		case 'I':
			ans = ans + 1
			i = i - 1
		default:
			return 0
		}
	}
	return ans
}
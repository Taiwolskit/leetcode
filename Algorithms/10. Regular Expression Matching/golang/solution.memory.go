func isMatch(s, p string) bool {
	if len(s) == 0 {
		return matchEmpty(p)
	}
	if len(p) == 0 {
		return len(s) == 0
	}

	if len(p) > 1 && p[1] == '*' {
		if isMatch(s, p[2:]) {
			return true
		}

		for m := 0; m < len(s); m++ {
			if s[m] == p[0] || p[0] == '.' {
				if isMatch(s[m+1:], p[2:]) {
					return true
				}
			} else {
				return false
			}
		}
		return false
	}

	return (p[0] == '.' || s[0] == p[0]) && isMatch(s[1:], p[1:])
}

func matchEmpty(p string) bool {
	if len(p) == 0 {
		return true
	}

	if len(p) == 1 {
		return false
	}

	return p[1] == '*' && matchEmpty(p[2:])
}
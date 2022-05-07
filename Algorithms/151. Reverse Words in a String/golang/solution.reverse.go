func reverseWords(s string) string {
	l := trimSpaces(s)
	reverse(l, 0, len(l)-1)
	reverseEachWord(l)
	return strings.Join([]string{string(l)}, "")
}

func trimSpaces(s string) []byte {
	var left, right int = 0, len(s) - 1
	for left <= right && s[left] == ' ' {
		left++
	}
	for left <= right && s[right] == ' ' {
		right--
	}

	output := make([]byte, 0)
	for i := left; i <= right; i++ {
		if s[i] != ' ' || output[len(output)-1] != ' ' {
			output = append(output, s[i])
		}
	}
	return output
}

func reverse(l []byte, left, right int) {
	for left < right {
		l[left], l[right] = l[right], l[left]
		left++
		right--
	}
}

func reverseEachWord(l []byte) {
	var n, start, end int = len(l), 0, 0
	for start < n {
		for end < n && l[end] != ' ' {
			end++
		}
		reverse(l, start, end-1)
		start = end + 1
		end++
	}
}
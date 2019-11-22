func convert(s string, numRows int) string {
	if numRows == 1 {
		return s
	}

	final := make([]byte, len(s))
	idx := 0

	for i := 0; i < numRows; i++ {
		j := i
		direction := 0
		if i == numRows-1 {
			direction = 1
		}

		for j < len(s) {
			final[idx] = s[j]
			idx++

			if direction == 0 {
				if i == numRows-1 {
					j += numRows*2 - 2
				} else {
					j += (numRows-i)*2 - 2
				}
				direction = 1
			} else {
				if i == 0 {
					j += numRows*2 - 2
				} else {
					j += i * 2
				}
				direction = 0
			}
		}
	}

	return string(final)
}
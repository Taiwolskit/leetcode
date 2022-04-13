func convert(s string, numRows int) string {
	if numRows == 1 {
		return s
	}

	rows := make([]string, numRows)
	var curRow = 0
	var goingDown = -1

	for _, c := range s {
		rows[curRow] += string(c)
		if curRow == 0 || curRow == numRows-1 {
			goingDown *= -1
		}
		curRow += goingDown
	}

	return strings.Join(rows, "")
}

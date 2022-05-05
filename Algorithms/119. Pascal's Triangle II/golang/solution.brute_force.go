func getRow(rowIndex int) []int {
	var ans []int
	for i := 0; i <= rowIndex; i++ {
		ans = append(ans, getNum(rowIndex, i))
	}
	return ans
}

func getNum(row int, col int) int {
	if row == 0 || col == 0 || col == row {
		return 1
	}
	return getNum(row-1, col-1) + getNum(row-1, col)
}
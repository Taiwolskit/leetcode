import "strconv"

func numberOfSteps(num int) int {
	binary := strconv.FormatInt(int64(num), 2)
	var ones int = 0
	for _, v := range binary {
		if v == '1' {
			ones++
		}
	}
	return ones + len(binary) - 1
}
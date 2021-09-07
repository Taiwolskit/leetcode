func generateParenthesis(n int) []string {
	return generate(n*2, "", 0, 0)
}

func generate(n int, cur string, leftNum int, rightNum int) []string {
	if n == 0 {
		return []string{cur}
	}
	res := make([]string, 0)

	if n > leftNum-rightNum {
		res = append(res, generate(n-1, cur+"(", leftNum+1, rightNum)...)
	}
	if leftNum > rightNum {
		res = append(res, generate(n-1, cur+")", leftNum, rightNum+1)...)
	}
	return res
}

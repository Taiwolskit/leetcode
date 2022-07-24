func fizzBuzz(n int) []string {
	ans := []string{}

	for i := 1; i <= n; i++ {
		numAnsStr := ""
		if i%3 == 0 {
			numAnsStr += "Fizz"
		}
		if i%5 == 0 {
			numAnsStr += "Buzz"
		}
		if numAnsStr == "" {
			numAnsStr = strconv.Itoa(i)
		}
		ans = append(ans, numAnsStr)
	}
	return ans
}
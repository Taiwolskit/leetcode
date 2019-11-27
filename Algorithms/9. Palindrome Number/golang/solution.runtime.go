func isPalindrome(x int) bool {
	return x >= 0 && x == reverse(x)
}

func reverse(x int) int {
	sum, a := 0, 0
	for x%10 != 0 || x/10 != 0 {
		a = x % 10
		sum = sum*10 + a
		x /= 10
	}
	return sum
}
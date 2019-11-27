func isPalindrome(x int) bool {
	if x < 0 || (x%10 == 0 && x != 0) {
		return false
	}

	number := x
	revertedNumber := 0

	for number != 0 {
		revertedNumber = 10*revertedNumber + number%10
		number /= 10
	}

	return x == revertedNumber
}
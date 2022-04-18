func convertToBase7(num int) string {
	if num == 0 {
		return "0"
	}

	res := ""
	negative := false
	if num < 0 {
		negative = true
		num = num * -1
	}
	for num > 0 {
		res = strconv.Itoa(num%7) + res
		num /= 7
	}
	if negative {
		res = "-" + res
	}
	return res
}

func addBinary(a string, b string) string {
	i, j, res, carry := len(a)-1, len(b)-1, "", 0
	for i >= 0 || j >= 0 {
		if i >= 0 {
			carry += int(a[i] - '0')
			i--
		}
		if j >= 0 {
			carry += int(b[j] - '0')
			j--
		}
		res = strconv.Itoa(carry%2) + res
		carry /= 2
	}
	if carry == 1 {
		return "1" + res
	}
	return res
}
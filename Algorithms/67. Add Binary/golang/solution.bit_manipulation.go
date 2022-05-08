func addBinary(a string, b string) string {
	var x, _ = new(big.Int).SetString(a, 2)
	var y, _ = new(big.Int).SetString(b, 2)

	var sum = new(big.Int)
	var carry = new(big.Int)
	for y.Text(2) != "0" {
		sum.Xor(x, y)
		carry.And(x, y).Lsh(carry, 1)
		x.Set(sum)
		y.Set(carry)
	}
	return x.Text(2)
}
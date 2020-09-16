import "math"

func divide(dividend int, divisor int) int {
	a := dividend / divisor
	if a <= int(math.Pow(2.0, 31.0)-1) && a >= int(math.Pow(-2.0, 31.0)) {
		return a
	} else {
		return a - 1
	}
}

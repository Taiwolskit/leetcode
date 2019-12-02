func intToRoman(num int) string {
	var roman []byte
	for num >= 1000 {
		roman = append(roman, 'M')
		num -= 1000
	}
	if num >= 900 {
		roman = append(roman, 'C')
		roman = append(roman, 'M')
		num -= 900
	}
	if num >= 500 {
		roman = append(roman, 'D')
		num -= 500
	}
	if num >= 400 {
		roman = append(roman, 'C')
		roman = append(roman, 'D')
		num -= 400
	}
	for num >= 100 {
		roman = append(roman, 'C')
		num -= 100
	}
	if num >= 90 {
		roman = append(roman, 'X')
		roman = append(roman, 'C')
		num -= 90
	}
	if num >= 50 {
		roman = append(roman, 'L')
		num -= 50
	}
	if num >= 40 {
		roman = append(roman, 'X')
		roman = append(roman, 'L')
		num -= 40
	}
	for num >= 10 {
		roman = append(roman, 'X')
		num -= 10
	}
	if num >= 9 {
		roman = append(roman, 'I')
		roman = append(roman, 'X')
		num -= 9
	}
	if num >= 5 {
		roman = append(roman, 'V')
		num -= 5
	}
	if num >= 4 {
		roman = append(roman, 'I')
		roman = append(roman, 'V')
		num -= 4
	}
	for num >= 1 {
		roman = append(roman, 'I')
		num -= 1
	}
	return string(roman)
}
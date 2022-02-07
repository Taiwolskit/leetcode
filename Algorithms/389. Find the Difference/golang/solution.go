func findTheDifference(s string, t string) byte {
	ht := make(map[byte]int, 0)
	for _, ch := range []byte(t) {
		ht[ch]++
	}

	for _, ch := range []byte(s) {
		ht[ch]--
	}

	var result byte
	var count int
	for result, count = range ht {
		if count > 0 {
			break
		}
	}

	return result
}

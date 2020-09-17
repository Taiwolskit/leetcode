func getSet(words []string) map[string]int {
	wm := map[string]int{}
	for _, w := range words {
		wm[w]++
	}
	return wm
}

func findSubstring(s string, words []string) []int {
	wsize := len(words[0])
	rs := []int{}
	for i := 0; i < wsize; i++ {
		l := i
		wct := 0
		wm := getSet(words)
		for r := i; r <= len(s)-wsize; r += wsize {
			word := s[r:(r + wsize)]
			_, haskey := wm[word]
			if !haskey {
				if wct != 0 {
					wm = getSet(words)
				}
				wct = 0
				l = r + wsize
				continue
			}
			wm[word]--
			if wm[word] >= 0 {
				wct++
			}

			for wm[word] < 0 {
				lword := s[l:(l + wsize)]
				l += wsize
				if word != lword {
					wct--
				}
				wm[lword]++
			}

			if wct == len(words) {
				rs = append(rs, l)
				continue
			}

		}
	}

	return rs
}

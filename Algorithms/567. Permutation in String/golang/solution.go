func checkInclusion(s1 string, s2 string) bool {
	if len(s1) > len(s2) {
		return false
	}

	var s1Map = [26]int{}
	var s2Map = [26]int{}
	for i := 0; i < len(s1); i++ {
		s1Map[s1[i]-'a']++
		s2Map[s2[i]-'a']++
	}

	count := 0
	for i := 0; i < 26; i++ {
		if s1Map[i] == s2Map[i] {
			count++
		}
	}

	for i := 0; i < len(s2)-len(s1); i++ {
		r := s2[i+len(s1)] - 'a'
		l := s2[i] - 'a'

		if count == 26 {
			return true
		}
		s2Map[r]++
		if s1Map[r] == s2Map[r] {
			count++
		} else if s1Map[r]+1 == s2Map[r] {
			count--
		}
		s2Map[l]--
		if s1Map[l] == s2Map[l] {
			count++
		} else if s1Map[l]-1 == s2Map[l] {
			count--
		}
	}

	return count == 26
}

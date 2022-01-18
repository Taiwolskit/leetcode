func wordPattern(pattern string, s string) bool {
	pp := strings.Split(pattern, "")
	sp := strings.Split(s, " ")
	if len(pp) != len(sp) {
		return false
	}
	mp := map[string]string{}
	ms := map[string]string{}
	for i, c := range pp {
		msp, okp := mp[c]
		cs, oks := ms[sp[i]]
		if okp != oks || oks && (c != cs || msp != sp[i]) {
			return false
		}
		mp[c] = sp[i]
		ms[sp[i]] = c
	}
	return true
}

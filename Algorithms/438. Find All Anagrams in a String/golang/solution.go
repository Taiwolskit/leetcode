func findAnagrams(s string, p string) []int {
	ns, np := len(s), len(p)
	if ns < np {
		return []int{}
	}

	pCount, sCount := [26]int{}, [26]int{}
	for _, ch := range p {
		pCount[ch-'a']++
	}

	output := []int{}
	for i := 0; i < ns; i++ {
		sCount[s[i]-'a']++
		if i >= np {
			sCount[s[i-np]-'a']--
		}
		if sCount == pCount {
			output = append(output, i-np+1)
		}
	}
	return output
}

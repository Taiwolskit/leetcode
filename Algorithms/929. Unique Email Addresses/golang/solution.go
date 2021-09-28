func numUniqueEmails(emails []string) int {
	m := map[string]bool{}
	for _, e := range emails {
		a := strings.Split(e, "@")
		l := strings.Split(a[0], "+")[0]
		l = strings.ReplaceAll(l, ".", "")
		m[fmt.Sprintf("%s@%s", l, a[1])] = true
	}
	return len(m)
}

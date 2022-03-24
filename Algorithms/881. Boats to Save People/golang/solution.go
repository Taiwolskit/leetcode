func numRescueBoats(people []int, limit int) int {
	sort.Ints(people)
	var ans int
	for i, j := 0, len(people)-1; i <= j; {
		ans++
		if people[i]+people[j] <= limit {
			i++
		}
		j--
	}
	return ans
}

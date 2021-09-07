func subsets(nums []int) [][]int {
	sol := [][]int{{}}
	for _, num := range nums {
		for _, cur := range sol {
			sol = append(sol, append([]int{num}, cur...))
		}
	}
	return sol
}

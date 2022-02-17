func combinationSum(candidates []int, target int) [][]int {
	results := make([][]int, 0)
	combination := make([]int, 0)
	backtrack(&results, candidates, target, &combination, 0)
	return results
}

func backtrack(results *[][]int, candidates []int, remain int, comb *[]int, start int) {
	if remain == 0 {
		combCopy := make([]int, len(*comb))
		copy(combCopy, *comb)
		*results = append(*results, combCopy)
		return
	} else if remain < 0 {
		return
	}

	for i := start; i < len(candidates); i++ {
		*comb = append(*comb, candidates[i])
		backtrack(results, candidates, remain-candidates[i], comb, i)
		*comb = (*comb)[:len(*comb)-1]
	}
}

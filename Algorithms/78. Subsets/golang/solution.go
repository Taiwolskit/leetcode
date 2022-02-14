func subsets(nums []int) [][]int {
	output := [][]int{}
	var backtrack func(int, []int)

	backtrack = func(first int, curr []int) {
		output = append(output, append([]int{}, curr...))
		for i := first; i < len(nums); i++ {
			backtrack(i+1, append(curr, nums[i]))
		}
	}

	backtrack(0, []int{})
	return output
}

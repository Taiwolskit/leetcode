func rob(nums []int) int {
	if len(nums) == 0 {
		return 0
	}
	var memo map[int]int = make(map[int]int, len(nums))
	return robFrom(memo, 0, nums)
}

func robFrom(memo map[int]int, i int, nums []int) int {
	if i >= len(nums) {
		return 0
	}

	if _, ok := memo[i]; ok {
		return memo[i]
	}
	if robFrom(memo, i+1, nums) > robFrom(memo, i+2, nums)+nums[i] {
		memo[i] = robFrom(memo, i+1, nums)
	} else {
		memo[i] = robFrom(memo, i+2, nums) + nums[i]
	}
	return memo[i]
}
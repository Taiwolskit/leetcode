func rob(nums []int) int {
	if len(nums) == 0 {
		return 0
	}

	var N int = len(nums)
	var maxRobbedAmount []int = make([]int, N+1)

	maxRobbedAmount[N], maxRobbedAmount[N-1] = 0, nums[N-1]
	for i := N - 2; i >= 0; i-- {
		if maxRobbedAmount[i+1] > maxRobbedAmount[i+2]+nums[i] {
			maxRobbedAmount[i] = maxRobbedAmount[i+1]
		} else {
			maxRobbedAmount[i] = maxRobbedAmount[i+2] + nums[i]
		}
	}
	return maxRobbedAmount[0]
}

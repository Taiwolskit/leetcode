func rob(nums []int) int {
	if len(nums) == 0 {
		return 0
	}
	var N int = len(nums)
	var robNext, robNextPlusOne int = nums[N-1], 0
	for i := N - 2; i >= 0; i-- {
		if robNext > robNextPlusOne+nums[i] {
			robNext, robNextPlusOne = robNext, robNext
		} else {
			robNext, robNextPlusOne = robNextPlusOne+nums[i], robNext
		}
	}
	return robNext
}

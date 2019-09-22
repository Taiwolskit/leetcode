func twoSum(nums []int, target int) []int {
	var result []int
	if len(nums) < 1 {
		return nums
	}

	for tracker1 := 0; tracker1 < len(nums)-1; tracker1++ {
		for tracker2 := tracker1 + 1; tracker2 < len(nums); tracker2++ {
			if target == nums[tracker1]+nums[tracker2] {
				result = append(result, tracker1, tracker2)
				return result
			}
		}
	}
	return result
}
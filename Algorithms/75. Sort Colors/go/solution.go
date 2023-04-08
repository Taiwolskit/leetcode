func sortColors(nums []int) {
	// for all idx < p0 : nums[idx < p0] = 0
	// curr is an index of element under consideration
	p0 := 0
	curr := 0
	// for all idx > p2 : nums[idx > p2] = 2
	p2 := len(nums) - 1

	for curr <= p2 {
		if nums[curr] == 0 {
			nums[p0], nums[curr] = nums[curr], nums[p0]
			p0++
			curr++
		} else if nums[curr] == 2 {
			nums[curr], nums[p2] = nums[p2], nums[curr]
			p2--
		} else {
			curr++
		}
	}
}

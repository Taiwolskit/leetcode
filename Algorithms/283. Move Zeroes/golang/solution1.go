func moveZeroes(nums []int) {
	var n, numZeroes int = len(nums), 0
	for i := 0; i < n; i++ {
		if nums[i] == 0 {
			numZeroes++
		}
	}
	var ans []int
	for _, num := range nums {
		if num != 0 {
			ans = append(ans, num)
		}
	}
	for numZeroes > 0 {
		ans = append(ans, 0)
		numZeroes--
	}
	for i := 0; i < n; i++ {
		nums[i] = ans[i]
	}
}
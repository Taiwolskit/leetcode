func rotate(nums []int, k int) {
	var n int = len(nums)
	var a []int = make([]int, n)
	for i := 0; i < n; i++ {
		a[(i+k)%n] = nums[i]
	}
	for i := 0; i < n; i++ {
		nums[i] = a[i]
	}
}

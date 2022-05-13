func merge(nums1 []int, m int, nums2 []int, n int) {
	nums1Copy := make([]int, m)
	copy(nums1Copy, nums1)
	var p1, p2 int = 0, 0

	for p := 0; p < n+m; p++ {
		if p2 >= n || (p1 < m && nums1Copy[p1] <= nums2[p2]) {
			nums1[p] = nums1Copy[p1]
			p1++
		} else {
			nums1[p] = nums2[p2]
			p2++
		}
	}
}
func fourSumCount(nums1 []int, nums2 []int, nums3 []int, nums4 []int) int {
	cnt := 0
	m := make(map[int]int)
	for _, a := range nums1 {
		for _, b := range nums2 {
			m[a+b]++
		}
	}
	for _, c := range nums3 {
		for _, d := range nums4 {
			cnt += m[-(c + d)]
		}
	}
	return cnt
}

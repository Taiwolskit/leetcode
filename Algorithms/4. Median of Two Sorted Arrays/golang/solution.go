func findMedianSortedArrays(nums1 []int, nums2 []int) float64 {
	if len(nums1) < len(nums2) {
		nums1, nums2 = nums2, nums1
	}
	total := len(nums1) + len(nums2)
	half := total / 2
	m := len(nums1)
	n := len(nums2)

	l := 0
	r := n - 1
	for true {
		left1 := math.MinInt64
		left2 := math.MinInt64
		right1 := math.MaxInt64
		right2 := math.MaxInt64

		i := 0
		j := 0

		if l <= r {
			j = (l + r) / 2
			i = half - j - 2
		} else {
			j = -1
			i = half - 1
		}

		if i >= 0 {
			left1 = nums1[i]
		}
		if j >= 0 {
			left2 = nums2[j]
		}
		if i+1 < m {
			right1 = nums1[i+1]
		}
		if j+1 < n {
			right2 = nums2[j+1]
		}

		if left1 <= right2 && left2 <= right1 {
			if total%2 == 1 {
				return min(right1, right2)
			} else {
				return (min(right1, right2) + max(left1, left2)) / float64(2)
			}
		} else if left2 > right1 {
			r = j - 1
		} else {
			l = j + 1
		}
	}
	return 0
}

func max(a, b int) float64 {
	if a > b {
		return float64(a)
	}
	return float64(b)
}

func min(a, b int) float64 {
	if a < b {
		return float64(a)
	}
	return float64(b)
}

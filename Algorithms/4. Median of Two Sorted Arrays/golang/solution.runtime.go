import "math"

func findMedianSortedArrays(nums1 []int, nums2 []int) float64 {
	n, m := len(nums1), len(nums2)
	if n > m {
		return findMedianSortedArrays(nums2, nums1)
	}
	i, j, imin, imax := 0, 0, 0, n
	for imin < imax {
		i = (imin + imax) / 2
		j = (n+m+1)/2 - i
		if i > 0 && j < m && nums1[i-1] > nums2[j] {
			imax = i
		} else if i < n && j > 0 && nums1[i] < nums2[j-1] {
			imin = i + 1
		} else {
			break
		}
	}

	i = (imin + imax) / 2
	j = (n+m+1)/2 - i

	var left float64
	if i == 0 {
		left = float64(nums2[j-1])
	} else if j == 0 {
		left = float64(nums1[i-1])
	} else {
		left = math.Max(float64(nums1[i-1]), float64(nums2[j-1]))
	}
	if (n+m)%2 == 1 {
		return left
	}

	var right float64
	if i == n {
		right = float64(nums2[j])
	} else if j == m {
		right = float64(nums1[i])
	} else {
		right = math.Min(float64(nums1[i]), float64(nums2[j]))
	}
	return (left + right) / 2.0
}

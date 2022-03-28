func search(nums []int, target int) bool {
	n := len(nums)
	if n == 0 {
		return false
	}

	end, start := n-1, 0
	for start <= end {
		mid := (start + end) / 2
		if nums[mid] == target {
			return true
		}
		if nums[start] == nums[mid] {
			start += 1
			continue
		}

		if nums[mid] > nums[start] {
			if nums[mid] > target && target >= nums[start] {
				end = mid - 1
			} else {
				start = mid + 1
			}
		} else {
			if target > nums[mid] && nums[end] >= target {
				start = mid + 1
			} else {
				end = mid - 1
			}
		}
	}

	return false
}

func twoSumLessThanK(nums []int, k int) int {
	sort.Ints(nums)
	left, right, answer := 0, len(nums)-1, 0

	for right > left {
		sum := nums[right] + nums[left]

		if sum < k {
			if sum > answer {
				answer = sum
			}
			left++
		} else {
			right--
		}
	}
	if answer == 0 {
		return -1
	}

	return answer
}

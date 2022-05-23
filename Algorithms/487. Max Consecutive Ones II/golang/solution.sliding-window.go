func findMaxConsecutiveOnes(nums []int) int {
	var longestSequence, left, right, numZeroes int = 0, 0, 0, 0

	for right < len(nums) {
		if nums[right] == 0 {
			numZeroes++
		}

		for numZeroes == 2 {
			if nums[left] == 0 {
				numZeroes--
			}
			left++
		}

		if right-left+1 > longestSequence {
			longestSequence = right - left + 1
		}
		right++
	}

	return longestSequence
}
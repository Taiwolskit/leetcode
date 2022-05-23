func findMaxConsecutiveOnes(nums []int) int {
	var longestSequence int = 0

	for left := 0; left < len(nums); left++ {
		var numZeroes int = 0
		for right := left; right < len(nums); right++ {
			if numZeroes == 2 {
				break
			}
			if nums[right] == 0 {
				numZeroes++
			}
			if numZeroes <= 1 {
				if right-left+1 > longestSequence {
					longestSequence = right - left + 1
				}
			}
		}
	}

	return longestSequence
}
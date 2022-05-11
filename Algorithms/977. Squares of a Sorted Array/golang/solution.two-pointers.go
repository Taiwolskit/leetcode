func sortedSquares(nums []int) []int {
	var n, lastIndex, left, right int = len(nums), len(nums) - 1, 0, len(nums) - 1
	result := make([]int, n)

	for left <= right {
		var leftSquare, rightSquare int = nums[left] * nums[left], nums[right] * nums[right]

		if leftSquare < rightSquare {
			result[lastIndex] = rightSquare
			right--
		} else {
			result[lastIndex] = leftSquare
			left++
		}
		lastIndex--
	}
	return result
}
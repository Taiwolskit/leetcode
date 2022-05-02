func twoSum(numbers []int, target int) []int {
	var (
		low  int = 0
		high int = len(numbers) - 1
	)
	for low < high {
		total := numbers[low] + numbers[high]
		if total == target {
			return []int{low + 1, high + 1}
		}
		if total < target {
			low++
		} else {
			high--
		}
	}
	return []int{-1, -1}
}
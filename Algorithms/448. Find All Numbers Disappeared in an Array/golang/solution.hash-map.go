func findDisappearedNumbers(nums []int) []int {
	var hashTable = make(map[int]bool)

	for _, num := range nums {
		hashTable[num] = true
	}

	var result []int
	for i := 1; i <= len(nums); i++ {
		if _, ok := hashTable[i]; !ok {
			result = append(result, i)
		}
	}
	return result
}
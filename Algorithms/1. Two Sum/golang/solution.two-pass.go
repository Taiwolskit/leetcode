func twoSum(nums []int, target int) []int {
	hashmap := make(map[int]int)

	for i, num := range nums {
		hashmap[num] = i
	}
	for i, num := range nums {
		if complement, ok := hashmap[target-num]; ok && i != complement {
			return []int{i, complement}
		}
	}

	return []int{}
}

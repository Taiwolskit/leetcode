func twoSum(nums []int, target int) []int {
	hashmap := make(map[int]int)

	for i, num := range nums {
		if complement, ok := hashmap[target-num]; ok {
			return []int{i, complement}
		}
		hashmap[num] = i
	}

	return []int{}
}

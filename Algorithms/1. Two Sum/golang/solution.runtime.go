func twoSum(nums []int, target int) []int {
    hash := make(map[int]int)
    for i, num := range nums {
        if j, ok := hash[target-num]; ok {
            return []int{j, i}
        }
        hash[num] = i
    }

    return nil
}

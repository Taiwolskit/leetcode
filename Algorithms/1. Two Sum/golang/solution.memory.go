func twoSum(nums []int, target int) []int {
    var result []int

    for i := 0; i < len(nums)-1; i++ {
        for j := i + 1; j < len(nums); j++ {
            if target == nums[i]+nums[j] {
                result = append(result, i, j)
                return result
            }
        }
    }

    return result
}

func removeElement(nums []int, val int) int {
    n := len(nums)
	last := 0

    for i := 0; i < n; i++ {
        if nums[i] != val {
            nums[last] = nums[i]
            last++
        }
    }

    return last
}

func canPartitionKSubsets(nums []int, k int) bool {
	if len(nums) < k {
		return false
	}

	sort.Ints(nums)

	sum, target := 0, 0
	for _, v := range nums {
		sum += v
	}

	target = sum / k
	if sum%k != 0 || nums[len(nums)-1] > target {
		return false
	}

	lock := make([]bool, len(nums))
	return recursive(nums, 0, 0, target, k, lock)
}

func recursive(nums []int, start, curSum, target, k int, lock []bool) bool {
	if k == 1 {
		return true
	}

	if curSum == target {
		return recursive(nums, 0, 0, target, k-1, lock)
	}

	for i := start; i < len(nums); i++ {
		if lock[i] || curSum+nums[i] > target {
			continue
		}

		lock[i] = true
		if recursive(nums, i+1, curSum+nums[i], target, k, lock) {
			return true
		}
		lock[i] = false
	}
	return false
}

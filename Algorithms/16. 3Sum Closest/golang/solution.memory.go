import (
	"sort"
)

func threeSumClosest(nums []int, target int) int {
	sort.Ints(nums)
	var result int
	var min int = 100000000
	for i := 0; i < len(nums)-2; i++ {
		if i == 0 || (i > 0 && nums[i] != nums[i-1]) {
			lo, hi := i+1, len(nums)-1
			for lo < hi {
				sum := nums[i] + nums[lo] + nums[hi]
				if sum == target {
					return target
				}
				if (sum-target)*(sum-target) < min {
					min = (sum - target) * (sum - target)
					result = sum
				}
				if sum < target {
					lo++
				} else {
					hi--
				}
			}
		}
	}
	return result
}
import "sort"

func threeSum(nums []int) [][]int {
	out := make([][]int, 0)
	sort.Ints(nums)
	length := len(nums)

	for i := 0; i < length-1; i++ {
		if nums[i] > 0 {
			break
		}
		if i > 0 && nums[i] == nums[i-1] {
			continue
		}

		l, r := i+1, length-1
		for l < r {
			total := nums[i] + nums[l] + nums[r]
			if total < 0 {
				l++
			} else if total > 0 {
				r--
			} else {
				out = append(out, []int{nums[i], nums[l], nums[r]})
				for l < r && nums[l] == nums[l+1] {
					l++
				}
				for l < r && nums[r] == nums[r-1] {
					r--
				}
				l++
				r--
			}
		}
	}
	return out
}
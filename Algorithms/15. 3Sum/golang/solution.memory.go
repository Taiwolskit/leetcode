import (
	"fmt"
	"sort"
)

func threeSum(nums []int) [][]int {
	var ret [][]int
	sort.Ints(nums)

	fmt.Println(nums)

	for i := 0; i < len(nums); i++ {
		j := i + 1
		k := len(nums) - 1

		for j < k {
			if (nums[i] + nums[j] + nums[k]) == 0 {

				found := false
				for _, l := range ret {
					if l[0] == nums[i] && l[1] == nums[j] && l[2] == nums[k] {
						found = true
					}
				}

				if !found {
					ret = append(ret, []int{nums[i], nums[j], nums[k]})
				}
			}

			if (nums[i] + nums[j] + nums[k]) > 0 {
				old := k
				k--

				for nums[old] == nums[k] && k > 1 {
					k--
				}
			} else {
				old := j
				j++

				for nums[old] == nums[j] && j < len(nums)-2 {
					j++
				}
			}
		}
	}

	return ret
}
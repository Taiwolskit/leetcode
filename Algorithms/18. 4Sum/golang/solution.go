import "sort"

func fourSum(nums []int, target int) [][]int {
	var res [][]int
	if len(nums) < 4 {
		return res
	}

	sort.Ints(nums)
	for i := 0; i < len(nums)-3; i++ {
		if nums[i]+nums[i+1]+nums[i+2]+nums[i+3] > target {
			break
		}

		if nums[i]+nums[len(nums)-3]+nums[len(nums)-2]+nums[len(nums)-1] < target {
			continue
		}

		if i != 0 && nums[i] == nums[i-1] {
			continue
		}

		for j := i + 1; j < len(nums)-2; j++ {
			if nums[i]+nums[j]+nums[j+1]+nums[j+2] > target {
				break
			}

			if nums[i]+nums[j]+nums[len(nums)-2]+nums[len(nums)-1] < target {
				continue
			}

			if j != i+1 && nums[j] == nums[j-1] {
				continue
			}

			low := j + 1
			high := len(nums) - 1
			tar := target - nums[i] - nums[j]

			for low < high {
				if low != j+1 && nums[low] == nums[low-1] {
					low++
				} else if high != len(nums)-1 && nums[high] == nums[high+1] {
					high--
				} else if nums[low]+nums[high] == tar {
					temp := []int{nums[i], nums[j], nums[low], nums[high]}
					res = append(res, temp)

					low++
					high--
				} else if nums[low]+nums[high] < tar {
					low++
				} else {
					high--
				}
			}
		}
	}

	return res
}

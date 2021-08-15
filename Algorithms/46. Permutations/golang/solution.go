func permute(nums []int) [][]int {
	allPerms := make([][]int, 0)
	recurse(&allPerms, make([]int, 0, len(nums)), nums)
	return allPerms
}

func recurse(results *[][]int, path, nums []int) {
	if len(nums) == 0 {
		copied := make([]int, len(path))
		copy(copied, path)
		*results = append(*results, copied)
	} else {
		for i := 0; i < len(nums); i++ {
			temp := nums[0]
			nums[0] = nums[i]
			nums[i] = temp
			path = append(path, nums[0])
			recurse(results, path, nums[1:])
			path = path[0 : len(path)-1]
			nums[i] = nums[0]
			nums[0] = temp
		}
	}
}

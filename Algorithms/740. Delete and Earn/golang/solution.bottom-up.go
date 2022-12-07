func deleteAndEarn(nums []int) int {
	points := make(map[int]int)
	var maxNumber int = 0

	for _, num := range nums {
		points[num] += num
		if num > maxNumber {
			maxNumber = num
		}
	}

	maxPoints := make([]int, maxNumber+1)
	maxPoints[1] = points[1]

	for i := 2; i < len(maxPoints); i += 1 {
		if maxPoints[i-1] > maxPoints[i-2]+points[i] {
			maxPoints[i] = maxPoints[i-1]
		} else {
			maxPoints[i] = maxPoints[i-2] + points[i]
		}
	}

	return maxPoints[maxNumber]
}

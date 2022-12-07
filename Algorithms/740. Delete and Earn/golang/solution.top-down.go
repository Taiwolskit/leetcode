func deleteAndEarn(nums []int) int {
	points := make(map[int]int)
	var maxNumber int = 0

	for _, num := range nums {
		points[num] += num
		if num > maxNumber {
			maxNumber = num
		}
	}

	return maxPoints(points, maxNumber)
}

func maxPoints(points map[int]int, num int) int {
	if num == 0 {
		return 0
	}
	if num == 1 {
		return points[1]
	}

	if maxPoints(points, num-1) > maxPoints(points, num-2)+points[num] {
		return maxPoints(points, num-1)
	}
	return maxPoints(points, num-2) + points[num]
}

func deleteAndEarn(nums []int) int {
	points := make(map[int]int)
	var maxNumber int = 0

	for _, num := range nums {
		points[num] += num
		if num > maxNumber {
			maxNumber = num
		}
	}

	var twoBack int = 0
	var oneBack int = points[1]

	for num := 2; num <= maxNumber; num += 1 {
		var temp int = twoBack + points[num]
		if oneBack > temp {
			twoBack = oneBack
		} else {
			twoBack = oneBack
			oneBack = temp
		}
	}
	return oneBack
}

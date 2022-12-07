func deleteAndEarn(nums []int) int {
	points := make(map[int]int)
	for _, num := range nums {
		points[num] += num
	}

	var elements []int
	for k, _ := range points {
		elements = append(elements, k)
	}
	sort.Sort(sort.IntSlice(elements))
	var twoBack int = 0
	var oneBack int = points[elements[0]]

	for i := 1; i < len(elements); i += 1 {
		var currentElement int = elements[i]
		if currentElement == elements[i-1]+1 {
			var temp int = twoBack + points[currentElement]
			if oneBack > temp {
				twoBack = oneBack
			} else {
				twoBack, oneBack = oneBack, temp
			}
		} else {
			twoBack, oneBack = oneBack, oneBack+points[currentElement]
		}
	}
	return oneBack
}

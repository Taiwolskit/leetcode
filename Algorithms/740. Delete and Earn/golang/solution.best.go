import (
	"math"
)

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
	var oneBack int = 0
	var n int = len(points)

	if n+n*int(math.Log2(float64(n))) > maxNumber {
		oneBack = points[1]
		for i := 2; i < maxNumber+1; i += 1 {
			var temp int = twoBack + points[i]
			if temp > oneBack {
				twoBack, oneBack = oneBack, temp
			} else {
				twoBack = oneBack
			}
		}
	} else {
		var elements []int
		for k, _ := range points {
			elements = append(elements, k)
		}
		sort.Sort(sort.IntSlice(elements))
		oneBack = points[elements[0]]
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
	}

	return oneBack
}

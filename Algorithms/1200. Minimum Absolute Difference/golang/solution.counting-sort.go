func minimumAbsDifference(arr []int) [][]int {
	minElement := arr[0]
	maxElement := arr[0]
	for _, num := range arr {
		if num < minElement {
			minElement = num
		}
		if num > maxElement {
			maxElement = num
		}
	}

	shift := -minElement
	line := make([]int, maxElement-minElement+1)

	for _, num := range arr {
		line[num+shift] = 1
	}

	minPairDiff := maxElement - minElement
	prev := 0
	answer := [][]int{}

	for curr := 1; curr <= maxElement+shift; curr++ {
		if line[curr] == 0 {
			continue
		}

		if curr-prev == minPairDiff {
			answer = append(answer, []int{prev - shift, curr - shift})
		} else if curr-prev < minPairDiff {
			answer = [][]int{{prev - shift, curr - shift}}
			minPairDiff = curr - prev
		}
		prev = curr
	}

	return answer
}

func minimumAbsDifference(arr []int) [][]int {
	sort.Ints(arr)
	minPairDiff := math.MaxInt32
	answer := [][]int{}

	for i := 0; i < len(arr)-1; i++ {
		currPairDiff := arr[i+1] - arr[i]
		if currPairDiff == minPairDiff {
			answer = append(answer, []int{arr[i], arr[i+1]})
		} else if currPairDiff < minPairDiff {
			answer = [][]int{{arr[i], arr[i+1]}}
			minPairDiff = currPairDiff
		}
	}

	return answer
}

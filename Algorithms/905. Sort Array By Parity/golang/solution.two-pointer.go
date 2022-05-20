func sortArrayByParity(nums []int) []int {
	even := []int{}
	odd := []int{}

	for _, v := range nums {
		if v%2 == 0 {
			even = append(even, v)
		} else {
			odd = append(odd, v)
		}
	}

	return append(even, odd...)
}
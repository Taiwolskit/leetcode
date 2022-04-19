func twoSumLessThanK(nums []int, k int) int {
	var answer int = -1
	var count [1001]int
	for _, num := range nums {
		count[num]++
	}
	var lo, hi int = 1, 1000

	for lo <= hi {
		sum := lo + hi
		if sum >= k || count[hi] == 0 {
			hi = hi - 1
		} else {
			valid := 1
			if hi > lo {
				valid = 0
			}

			if count[lo] > valid {
				if sum > answer {
					answer = sum
				}
			}
			lo = lo + 1
		}
	}

	return answer
}

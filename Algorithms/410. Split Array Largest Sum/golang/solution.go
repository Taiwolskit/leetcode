func splitArray(nums []int, m int) int {
	var minLargestSplitSum int
	var left int
	var right int

	for _, num := range nums {
		if num > left {
			left = num
		}
		right += num
	}

	for left <= right {
		maxSumAllowed := (left + right) / 2
		if minSubarraysRequired(nums, maxSumAllowed) <= m {
			right = maxSumAllowed - 1
			minLargestSplitSum = maxSumAllowed
		} else {
			left = maxSumAllowed + 1
		}
	}

	return minLargestSplitSum
}

func minSubarraysRequired(nums []int, maxSumAllowed int) int {
	currentSum := 0
	splitsRequired := 0

	for _, element := range nums {
		if currentSum+element <= maxSumAllowed {
			currentSum += element
		} else {
			currentSum = element
			splitsRequired++
		}
	}

	splitsRequired++
	return splitsRequired
}

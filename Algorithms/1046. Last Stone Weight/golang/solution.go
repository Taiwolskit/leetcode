func lastStoneWeight(stones []int) int {
	maxWeight := max(stones)
	buckets := make([]int, maxWeight+1)

	for _, value := range stones {
		buckets[value]++
	}

	biggestWeight := 0
	currentWeight := maxWeight
	for currentWeight > 0 {
		if buckets[currentWeight] == 0 {
			currentWeight--
		} else if biggestWeight == 0 {
			buckets[currentWeight] %= 2
			if buckets[currentWeight] == 1 {
				biggestWeight = currentWeight
			}
			currentWeight--
		} else {
			buckets[currentWeight]--
			if biggestWeight-currentWeight <= currentWeight {
				buckets[biggestWeight-currentWeight]++
				biggestWeight = 0
			} else {
				biggestWeight -= currentWeight
			}
		}
	}

	return biggestWeight
}

func max(stones []int) (max int) {
	max_one := stones[0]
	for _, value := range stones {
		if value > max_one {
			max_one = value
		}
	}
	return max_one
}

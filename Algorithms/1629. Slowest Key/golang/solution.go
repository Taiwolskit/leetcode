func slowestKey(releaseTimes []int, keysPressed string) byte {
	n := len(releaseTimes)
	result := keysPressed[0]
	maxDiff := releaseTimes[0]

	for i := 1; i < n; i++ {
		diff := releaseTimes[i] - releaseTimes[i-1]
		if diff > maxDiff || (diff == maxDiff && keysPressed[i] > result) {
			maxDiff = diff
			result = keysPressed[i]
		}
	}

	return result
}

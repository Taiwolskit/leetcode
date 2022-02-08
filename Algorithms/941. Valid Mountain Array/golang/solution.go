func validMountainArray(arr []int) bool {
	N := len(arr)
	if N < 3 {
		return false
	}
	i := 0

	for i < N-1 && arr[i] < arr[i+1] {
		i++
	}

	if i == 0 || i == N-1 {
		return false
	}

	for i < N-1 && arr[i] > arr[i+1] {
		i++
	}

	return i == N-1
}

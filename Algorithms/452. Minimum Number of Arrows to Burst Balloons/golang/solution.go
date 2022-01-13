func findMinArrowShots(points [][]int) int {
	if len(points) == 0 {
		return 0
	}

	sort.Slice(points, func(i, j int) bool {
		return points[i][1] < points[j][1]
	})

	arrows, firstEnd := 1, points[0][1]

	for i := 0; i < len(points); i++ {
		if points[i][0] > firstEnd {
			arrows++
			firstEnd = points[i][1]
		}
	}

	return arrows
}

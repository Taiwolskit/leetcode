var res int

func moving(grid [][]int, x int, y int, cellsToVisit int) {
	if y < 0 || y >= len(grid) || x < 0 || x >= len(grid[0]) || grid[y][x] == -1 || grid[y][x] == 3 {
		return
	}
	if grid[y][x] == 2 {
		if cellsToVisit == 0 {
			res++
		}
		return
	}

	grid[y][x] = 3
	moving(grid, x+1, y, cellsToVisit-1)
	moving(grid, x-1, y, cellsToVisit-1)
	moving(grid, x, y+1, cellsToVisit-1)
	moving(grid, x, y-1, cellsToVisit-1)
	grid[y][x] = 0
}

func uniquePathsIII(grid [][]int) int {
	cellsToVisit := 0
	res = 0

	si, sj := 0, 0
	for i, row := range grid {
		for j, v := range row {
			switch v {
			case 1:
				si, sj = i, j
			case 0:
				cellsToVisit++
			}
		}
	}

	moving(grid, sj, si, cellsToVisit+1)
	return res
}

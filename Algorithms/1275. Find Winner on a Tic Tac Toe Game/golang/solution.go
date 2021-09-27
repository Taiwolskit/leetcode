func tictactoe(moves [][]int) string {
	rows := []int{0, 0, 0}
	cols := []int{0, 0, 0}

	diag := 0
	anti := 0

	remain := 9
	flag := true

	for i := 0; i < len(moves); i++ {
		if flag {
			rows[moves[i][0]]++
			cols[moves[i][1]]++
			if moves[i][0] == moves[i][1] {
				diag++
			}
			if moves[i][0]+moves[i][1] == 2 {
				anti++
			}
			flag = false
		} else {
			rows[moves[i][0]]--
			cols[moves[i][1]]--
			if moves[i][0] == moves[i][1] {
				diag--
			}
			if moves[i][0]+moves[i][1] == 2 {
				anti--
			}
			flag = true
		}

		if diag == 3 || anti == 3 || rows[0] == 3 || rows[1] == 3 || rows[2] == 3 || cols[0] == 3 || cols[1] == 3 || cols[2] == 3 {
			return "A"
		}
		if diag == -3 || anti == -3 || rows[0] == -3 || rows[1] == -3 || rows[2] == -3 || cols[0] == -3 || cols[1] == -3 || cols[2] == -3 {
			return "B"
		}
		remain--
	}

	if remain == 0 {
		return "Draw"
	}

	return "Pending"
}

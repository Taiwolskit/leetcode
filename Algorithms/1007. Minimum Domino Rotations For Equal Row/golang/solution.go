func minDominoRotations(tops []int, bottoms []int) int {
	rotations := check(tops, bottoms, tops[0])
	if rotations != -1 || tops[0] == bottoms[0] {
		return rotations
	}
	return check(tops, bottoms, bottoms[0])
}

func check(tops, bottoms []int, x int) int {
	var rotationsA, rotationsB int

	for i := 0; i < len(tops); i++ {
		if tops[i] != x && bottoms[i] != x {
			return -1
		} else if tops[i] != x {
			rotationsA++
		} else if bottoms[i] != x {
			rotationsB++
		}
	}

	if rotationsA > rotationsB {
		return rotationsB
	}
	return rotationsA
}

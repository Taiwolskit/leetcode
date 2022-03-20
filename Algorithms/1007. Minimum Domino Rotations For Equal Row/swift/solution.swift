class Solution {
    func minDominoRotations(_ tops: [Int], _ bottoms: [Int]) -> Int {
        let rotations = check(tops[0], tops, bottoms)
        if rotations != -1 || tops[0] == bottoms[0] {
            return rotations
        }
        return check(bottoms[0], tops, bottoms)
    }

    private func check(_ x: Int, _ tops: [Int], _ bottoms: [Int]) -> Int {
        var rotationsA = 0, rotationsB = 0

        for i in 0..<tops.count {
            if tops[i] != x, bottoms[i] != x {
                return -1
            } else if  tops[i] != x {
                rotationsA += 1
            } else if bottoms[i] != x {
                rotationsB += 1
            }
        }
        return min(rotationsA, rotationsB)
    }
}

class Solution {
    func tictactoe(_ moves: [[Int]]) -> String {
        var rows = [0, 0, 0]
        var cols = [0, 0, 0]
        var antidiag = 0
        var diag = 0

        for (index, move) in moves.enumerated() {
            let playerVal = index % 2 == 0 ? 1 : -1
            let row = move[0]
            let col = move[1]

            if row == col {
               diag += playerVal
            }

            if row + col == 2 {
               antidiag += playerVal
            }

            rows[row] += playerVal
            cols[col] += playerVal

            if diag == 3 || antidiag == 3 || rows[row] == 3 || cols[col] == 3 { return "A" }
            if diag == -3 || antidiag == -3 || rows[row] == -3 || cols[col] == -3 { return "B" }
        }

        if moves.count == 9 { return "Draw" }
        return "Pending"
    }
}

class Solution {
    func solve(_ board: inout [[Character]]) {
        guard let column = board.first?.count else {
            return
        }

        let row = board.count

        var edges = [Pair<Int>]()

        // Add vertical edges
        for i in 0..<row {
            edges.append(Pair<Int>(row: i, column: 0))
            edges.append(Pair<Int>(row: i, column: column - 1))
        }
        // Add horizontal edges
        for j in 0..<column {
            edges.append(Pair<Int>(row: 0, column: j))
            edges.append(Pair<Int>(row: row - 1, column: j))
        }
        // Go through the edges and find "O" and apply dfs to all neighbours
        for pair in edges {
            dfsMe(&board, pair.row, pair.column)
        }

        // "W" - are not surrounded, so we need to make them "O" again
        // "O" - surrounded ones
        for i in 0..<row {
            for j in 0..<column {
                if board[i][j] == "W" {
                    board[i][j] = "O"
                } else if board[i][j] == "O" {
                    board[i][j] = "X"
                }
            }
        }
    }

    func dfsMe(_ board: inout [[Character]], _ i: Int, _ j: Int) {
        if j < 0 || i < 0 || board.first!.count <= j || board.count <= i || board[i][j] == "X" || board[i][j] == "W" {
            return
        }

        board[i][j] = "W"

        dfsMe(&board, i + 1, j)
        dfsMe(&board, i - 1, j)
        dfsMe(&board, i, j + 1)
        dfsMe(&board, i, j - 1)
    }

    struct Pair<Value> {
        var row: Value
        var column: Value
    }
}

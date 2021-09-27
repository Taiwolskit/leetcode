class Solution {
    func spiralOrder(_ matrix: [[Int]]) -> [Int] {
        guard  !matrix.isEmpty else {
            return []
        }
        var top = 0
        var bottom = matrix.count - 1
        var left = 0
        var right = matrix[0].count - 1
        let count = matrix.count * matrix[0].count
        var arr = [Int]()
        while arr.count < count {

            for i in stride(from: left, to: right+1, by: 1) where arr.count < count {
                arr.append(matrix[top][i])
            }
            top += 1
            for i in stride(from: top, to: bottom+1, by: 1) where arr.count < count {
                arr.append(matrix[i][right])
            }
            right -= 1
            for i in stride(from: right, to: left-1, by: -1) where arr.count < count {
                arr.append(matrix[bottom][i])
            }
            bottom -= 1
            for i in stride(from: bottom, to: top-1, by: -1) where arr.count < count {
                arr.append(matrix[i][left])
            }
            left += 1
        }
        return arr
    }
}

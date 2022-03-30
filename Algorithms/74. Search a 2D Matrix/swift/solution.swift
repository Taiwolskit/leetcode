class Solution {
    func searchMatrix(_ matrix: [[Int]], _ target: Int) -> Bool {
        let m = matrix.count
        guard m > 0 else { return false }
        let n = matrix[0].count

        var left = 0, right = m * n - 1
        while left <= right {
            let pivotIdx = (left + right) / 2
            let pivotElement = matrix[pivotIdx / n][pivotIdx % n]
            if pivotElement == target {
                return true
            } else if target < pivotElement {
                right = pivotIdx - 1
            } else {
                left = pivotIdx + 1
            }
        }
        return false
    }
}

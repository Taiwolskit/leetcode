class Solution {
    func getRow(_ rowIndex: Int) -> [Int] {
        var ans: [Int] = [];
        for i in 0...rowIndex {
            ans.append(getNum(rowIndex, i))
        }
        return ans
    }

    func getNum(_ row: Int, _ col: Int) -> Int {
        if row == 0 || col == 0 || row == col {
            return 1
        }
        return getNum(row - 1, col - 1) + getNum(row - 1, col)
    }
}
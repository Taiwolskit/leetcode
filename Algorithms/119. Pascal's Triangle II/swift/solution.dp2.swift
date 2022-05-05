class Solution {
    func getRow(_ rowIndex: Int) -> [Int] {
        var ans: [Int] = Array(repeating: 1, count: rowIndex + 1)
        guard rowIndex > 0 else {
            return ans
        }
        for i in 1..<rowIndex {
            for j in stride(from: i, to: 0, by: -1) {
                ans[j] += ans[j - 1]
            }
        }
        return ans
    }
}
class Solution {
    func getRow(_ rowIndex: Int) -> [Int] {
        var ans: [Int] = [1]
        guard rowIndex > 0 else {
            return ans
        }
        for k in 1...rowIndex {
            ans.append(ans.last! * (rowIndex - k + 1) / k)
        }
        return ans
    }
}
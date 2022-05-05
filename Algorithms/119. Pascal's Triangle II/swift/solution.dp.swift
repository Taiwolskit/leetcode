class Solution {
    func getRow(_ rowIndex: Int) -> [Int] {
        var prev: [Int] = [1]
        for i in 0..<rowIndex {
            var curr: [Int] = [1]
            for j in 1..<prev.count {
                curr.append(prev[j - 1] + prev[j])
            }
            curr.append(1)
            prev = curr
        }
        return prev
    }
}
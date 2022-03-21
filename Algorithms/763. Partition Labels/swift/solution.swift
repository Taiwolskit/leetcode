class Solution {
    func partitionLabels(_ s: String) -> [Int] {
        var last = [Character:Int]()
        for (i, c) in s.enumerated() {
            last[c, default: 0] = i
        }

        var ans = [Int]()
        var j = 0
        var anchor = -1
        for (i, c) in s.enumerated() {
            j = max(j, last[c, default: 0])
            if i == j {
                ans.append(i - anchor)
                anchor = i
            }
        }
        return ans
    }
}

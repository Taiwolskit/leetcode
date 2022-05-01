class Solution {
    func longestCommonPrefix(_ strs: [String]) -> String {
        guard !strs.isEmpty else {
            return ""
        }
        var prefix: String = strs.first!
        for i: Int in 1..<strs.count {
            while !strs[i].hasPrefix(prefix) {
                prefix.removeLast()
                guard !prefix.isEmpty else {
                    return ""
                }
            }
        }
        return prefix
    }
}
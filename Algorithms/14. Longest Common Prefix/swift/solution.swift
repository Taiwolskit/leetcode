class Solution {
    func longestCommonPrefix(_ strs: [String]) -> String {
        guard strs.count > 0 else {
            return ""
        }

        var prefix = strs[0]
        for i in 1..<strs.count {
            while !strs[i].hasPrefix(prefix) {
                prefix = String(prefix.dropLast(1))
                if prefix.isEmpty {
                    return ""
                }
            }
        }

        return prefix
    }
}
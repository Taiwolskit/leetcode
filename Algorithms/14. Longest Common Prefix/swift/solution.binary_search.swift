class Solution {
    func longestCommonPrefix(_ strs: [String]) -> String {
        guard !strs.isEmpty else {
            return ""
        }

        var minLen: Int = Int.max
        for str: String in strs {
            minLen = min(str.count, minLen)
        }

        var low: Int = 1
        var hight: Int = minLen
        while low <= hight {
            let mid: Int = (low + hight) / 2
            if isCommonPrefix(strs, mid) {
                low = mid + 1
            } else {
                hight = mid - 1
            }
        }
        let index: String.Index = strs[0].index(strs[0].startIndex, offsetBy: (low + hight)/2)
        return String(strs[0][..<index])
    }

    private func isCommonPrefix(_ strs: [String], _ length: Int) -> Bool {
        let str1: String = String(strs[0][..<(strs[0].index(strs[0].startIndex, offsetBy: length))])
        for i: Int in 1..<strs.count {
            if !strs[i].hasPrefix(str1) {
                return false
            }
        }
        return true
    }
}
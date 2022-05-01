class Solution {
    func longestCommonPrefix(_ strs: [String]) -> String {
        guard !strs.isEmpty else {
            return ""
        }

        return longestPrefix(strs, 0, strs.count - 1)
    }

    private func longestPrefix(_ strs: [String], _ l: Int, _ r: Int) -> String {
        if l == r {
            return strs[l]
        }

        let mid: Int = (l + r) / 2
        let lcpLeft: String = longestPrefix(strs, l, mid)
        let lcpRight: String = longestPrefix(strs, mid + 1, r)
        return commonPrefix(lcpLeft, lcpRight)
    }

    private func commonPrefix(_ left: String, _ right: String) -> String {
        var minLen: Int = min(left.count, right.count)
        for i: Int in 0..<minLen {
            if left[left.index(left.startIndex, offsetBy: i)] != right[right.index(right.startIndex, offsetBy: i)] {
                return String(left[..<left.index(left.startIndex, offsetBy: i)])
            }
        }
        return String(left[..<left.index(left.startIndex, offsetBy: minLen)])
    }
}
class Solution {
    func longestPalindrome(_ s: String) -> String {
        let expandStr = "^#" + s.map { String($0) }.joined(separator: "#") + "#$"
        let n = expandStr.count
        var P = [Int](repeating: 0, count: n)
        var center = 0
        var right = 0
        for i in 1..<n - 1 {
            let iMirror = 2 * center - i
            if right > i {
                P[i] = min(right - i, P[iMirror])
            }
            while expandStr[expandStr.index(expandStr.startIndex, offsetBy: i + 1 + P[i])]
                == expandStr[expandStr.index(expandStr.startIndex, offsetBy: i - 1 - P[i])]
            {
                P[i] += 1
            }
            if i + P[i] > right {
                center = i
                right = i + P[i]
            }
        }
        let maxLen = P.max() ?? 0
        let centerIndex = P.firstIndex(of: maxLen) ?? 0
        let start = s.index(s.startIndex, offsetBy: (centerIndex - maxLen) / 2)
        let end = s.index(s.startIndex, offsetBy: (centerIndex + maxLen) / 2)
        return String(s[start..<end])
    }
}

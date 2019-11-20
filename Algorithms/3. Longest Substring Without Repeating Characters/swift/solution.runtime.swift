class Solution {
    func lengthOfLongestSubstring(_ s: String) -> Int {
        guard s.count > 1 else {
            return s.count
        }

        let chars = Array(s)
        var left = 0
        var right = 1
        var longest = 0
        while right < chars.count {
            for i in left..<right {
                if chars[i] == chars[right] {
                    left = i + 1
                    break
                }
            }
            right += 1
            longest = max(longest, right - left)
        }
        return longest
    }
}
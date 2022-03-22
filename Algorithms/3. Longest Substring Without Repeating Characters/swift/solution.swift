class Solution {
    func lengthOfLongestSubstring(_ s: String) -> Int {
        var ans = 0
        var mp: [Character: Int] = [:]

        var i = 0
        for (j, char) in s.enumerated() {
            if let val = mp[char] {
                i = max(i, val)
            }

            ans = max(ans, j - i + 1)
            mp[char] = j + 1
        }
        return ans
    }
}

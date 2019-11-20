class Solution {
    func lengthOfLongestSubstring(_ s: String) -> Int {
        var length = 0
        var subStrings: [Character] = []

        for c in s {
            if subStrings.contains(c), let index = subStrings.index(of: c) {
                length = max(length, subStrings.count)
                subStrings.removeSubrange(0...index)
            }
            subStrings.append(c)
        }
        return max(length, subStrings.count)
    }
}
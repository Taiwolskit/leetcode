class Solution {
    func longestPalindrome(_ s: String) -> String {
        let s = Array(s)
        var result: ArraySlice<Character> = []
        var i = s.startIndex

        while i < s.endIndex - result.count / 2 {
            var left = i
            var right = i
            while right + 1 < s.endIndex && s[right] == s[right + 1] {
                right += 1
            }

            i = right + 1
            while s.startIndex < left && right < s.endIndex - 1 && s[left-1] == s[right+1] {
                left -= 1
                right += 1
            }
            let length = right - left + 1
            if length > result.count {
                result = s[left...right]
            }
        }

        return String(result)
    }
}
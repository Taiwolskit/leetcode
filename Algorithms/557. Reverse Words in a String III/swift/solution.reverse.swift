class Solution {
    func reverseWords(_ s: String) -> String {
        var result: [String] = []
        var word: String = ""
        for ch in s {
            if ch == " " {
                result.append(word)
                word = ""
            } else {
                word = String(ch) + word
            }
        }
        result.append(word)
        return result.joined(separator: " ")
    }
}
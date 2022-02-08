class Solution {
    func myAtoi(_ s: String) -> Int {
        var sign = 1
        var result = 0
        var i = 0
        while i < s.count && s[s.index(s.startIndex, offsetBy: i)] == " " {
            i += 1
        }
        if i < s.count && (s[s.index(s.startIndex, offsetBy: i)] == "-" || s[s.index(s.startIndex, offsetBy: i)] == "+") {
            sign = s[s.index(s.startIndex, offsetBy: i)] == "-" ? -1 : 1
            i += 1
        }
        while i < s.count && s[s.index(s.startIndex, offsetBy: i)] >= "0" && s[s.index(s.startIndex, offsetBy: i)] <= "9" {
            result = result * 10 + Int(String(s[s.index(s.startIndex, offsetBy: i)]))!
            i += 1
        }
        return sign * result
    }
}

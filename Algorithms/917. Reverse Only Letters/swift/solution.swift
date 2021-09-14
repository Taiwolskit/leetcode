class Solution {
    func reverseOnlyLetters(_ S: String) -> String {
        let arr = Array(S)
        var letters = arr.filter({ $0.isLetter })
        var result = [Character]()
        for s in arr {
            result.append(s.isLetter ? letters.removeLast() : s)
        }
        return String(result)
    }
}

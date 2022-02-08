class Solution {
    func detectCapitalUse(_ word: String) -> Bool {
        guard !word.isEmpty else { return true }

        var capicalCount = 0
        var lowerCaseCount = 0
        for char in word {
            if char.isUppercase {
                guard lowerCaseCount == 0 else { return false }
                capicalCount += 1
            } else if char.isLowercase {
                guard capicalCount <= 1 else { return false }
                lowerCaseCount += 1
            }
        }

        return capicalCount == 0 || capicalCount == word.count || word.first?.isUppercase == true
    }
}

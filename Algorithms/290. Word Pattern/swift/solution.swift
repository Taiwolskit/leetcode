class Solution {
    func wordPattern(_ pattern: String, _ s: String) -> Bool {

        let chars = [Character](pattern)
        let words  = s.components(separatedBy: " ")

        if chars.count != words.count { return false }

        var letterToWordHash = [String: String]()
        var wordToLetterHash = [String: String]()
        for (index, letter) in letters.enumerated() {
            let word = words[index]
            if let existingWordHash = letterToWordHash[letter], word != existingWordHash { return false }
            if let existingLetterHash = wordToLetterHash[word], letter != existingLetterHash { return false }

            letterToWordHash[letter] = word
            wordToLetterHash[word] = letter
        }

        return true
    }
}

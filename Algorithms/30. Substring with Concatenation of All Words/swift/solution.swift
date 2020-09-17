class Solution {

    func findSubstring(_ s: String, _ words: [String]) -> [Int] {
        guard words.count > 0 else { return [] }
        let wordLen = words[0].count
        guard wordLen > 0 else { return [] }

        var res = [Int]()
        let windowSize = wordLen * words.count
        var dic = [String: Int]()
        var wordCount = words.count

        for word in words {
            dic[word] = dic[word, default: 0] + 1
        }

        let s = Array(s)
        for startIndex in 0..<wordLen {

            var front = startIndex
            var end = startIndex

            while front < (s.count - (windowSize - 1)) {

                let bookend = substring(s, end, wordLen)

                if dic[bookend] == nil {
                    while front != end {
                        let word = substring(s, front, wordLen)
                        dic[word] = dic[word, default: 0] + 1
                        wordCount += 1
                        front += wordLen;
                    }
                    end += wordLen;
                    front = end;
                    continue;
                }

                guard let count = dic[bookend] else {
                    print("Logic is broken")
                    return res
                }

                if count > 0 {
                    dic[bookend] = dic[bookend, default: 0] - 1
                    wordCount -= 1
                    if wordCount == 0 {
                        res.append(front)
                    }
                    end += wordLen
                } else {
                    let word = substring(s, front, wordLen)
                    dic[word] = dic[word, default: 0] + 1
                    wordCount += 1
                    front += wordLen
                }
            }
        }
        return res
    }

    func substring(_ s: [Character], _ index: Int, _ count: Int) -> String {
        if index < s.count {
            var endIndex = index + count
            if endIndex > s.count { endIndex = s.count }
            return String(s[index..<endIndex])
        }
        return ""
    }
}

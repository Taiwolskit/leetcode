class Solution {
    func findAnagrams(_ s: String, _ p: String) -> [Int] {
        let np = p.count
        let ns = s.count
        if ns < np {
            return []
        }

        let s = Array(s)
        var pCount = [Character: Int]()
        var sCount = [Character: Int]()
        for ch in p {
            pCount[ch, default: 0] += 1
        }

        var output: [Int] = []
        for i in 0..<ns {
            sCount[s[i], default: 0] += 1

            if i >= np {
                let char = s[i - np]
                sCount[char] = sCount[char]! > 1 ? sCount[char]! - 1 : nil
            }

            if sCount == pCount {
                output.append(i - np + 1)
            }
        }

        return output
    }
}

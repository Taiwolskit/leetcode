class Solution {
    private func isUnique(_ str: String) -> Bool {
        let set = Set<Character>(str)
        return set.count == str.count
    }

    func maxLength(_ arr: [String]) -> Int {
        var combos = [String]()
        var maximum = 0

        combos.append("")

        for s in arr {
            for c in combos {
                let str = c + s
                if isUnique(str) {
                    combos.append(str)
                    maximum = max(maximum, str.count)
                }
            }
        }

        return maximum
    }
}

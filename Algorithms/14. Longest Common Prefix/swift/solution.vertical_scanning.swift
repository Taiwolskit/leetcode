class Solution {
    func longestCommonPrefix(_ strs: [String]) -> String {
        guard !strs.isEmpty else {
            return ""
        }
        var prefix: String = ""
        var iterators: [String.Iterator] = strs.map { $0.makeIterator() }
        for letter: String.Element in strs[0] {
            for j: Int in 1..<strs.count {
                guard letter == iterators[j].next() else { return prefix }
            }
            prefix.append(letter)
        }

        return prefix
    }
}

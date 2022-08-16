class Solution {
    func firstUniqChar(_ s: String) -> Int {
        var dict: [Character: Int] = [Character: Int]()
        for c: String.Element in s {
            dict[c] = (dict[c] ?? 0) + 1
        }
        for (i, c) in s.enumerated() {
            if dict[c] == 1 {
                return i
            }
        }
        return -1
    }
}

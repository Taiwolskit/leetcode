class Solution {
    func getSmallestString(_ n: Int, _ k: Int) -> String {
        var result: [Character] = Array(repeating: "a", count: n), diff = k

        for i in stride(from: n - 1, to: -1, by: -1) {
            var add = min(diff - i, 26)
            result[i] = Character(UnicodeScalar(add + 97 - 1)!)
            diff -= add
        }
        return String(result)
    }
}

class Solution {
    func findTheDifference(_ s: String, _ t: String) -> Character {
        var t = t
        for ch in s {
            if t.contains(ch), let index = t.firstIndex(of: ch) {
                t.remove(at: index)
            }
        }
        return Character(t)
    }
}

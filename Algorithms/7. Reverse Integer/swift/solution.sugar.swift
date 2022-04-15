class Solution {
    func reverse(_ x: Int) -> Int {
        let negative = x < 0 ? -1 : 1
        let result = Int(String(String(abs(x)).reversed())) ?? 0
        if result > Int(pow(2.0, 31)) {
            return 0
        }
        return result * negative
    }
}

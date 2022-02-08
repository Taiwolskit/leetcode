class Solution {
    func addDigits(_ num: Int) -> Int {
        return num != 0 ? 1 + (num - 1) % 9 : 0
    }
}

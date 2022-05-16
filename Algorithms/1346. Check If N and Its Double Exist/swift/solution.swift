class Solution {
    func checkIfExist(_ arr: [Int]) -> Bool {
        var seen = Set<Int>()
        for num in arr {
            if seen.contains(num * 2) || (num % 2 == 0 && seen.contains(num / 2)) {
                return true
            }
            seen.insert(num)
        }
        return false
    }
}
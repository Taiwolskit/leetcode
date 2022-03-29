class Solution {
    func findDuplicate(_ nums: [Int]) -> Int {
        var duplicate = 0
        var seen = Set<Int>()
        for num in nums {
            if seen.update(with: num) != nil {
                duplicate = num
                break
            }
        }
        return duplicate
    }
}

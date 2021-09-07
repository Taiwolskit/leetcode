class Solution {
    func singleNumber(_ nums: [Int]) -> Int {
        var sum = 0
        for num in nums {
            sum ^= num
        }
        return sum
    }
}

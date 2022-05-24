class Solution {
    func findMaxConsecutiveOnes(_ nums: [Int]) -> Int {
        var prev: Int = -1
        var curr: Int = 0
        var maxLen: Int = 0

        for num in nums {
            if num == 0 {
                prev = curr
                curr = 0
            } else {
                curr += 1
            }
            maxLen = max(maxLen, curr + prev + 1)
        }
        return maxLen
    }
}

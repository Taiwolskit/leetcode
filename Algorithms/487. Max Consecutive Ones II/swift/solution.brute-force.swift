class Solution {
    func findMaxConsecutiveOnes(_ nums: [Int]) -> Int {
        var longestSequence: Int = 0

        for left in 0..<nums.count {
            var numZeroes: Int = 0

            for right in left..<nums.count {
                if numZeroes == 2 {
                    break
                }

                if nums[right] == 0 {
                    numZeroes += 1
                }
                if numZeroes <= 1 {
                    longestSequence = max(longestSequence, right - left + 1)
                }
            }
        }

        return longestSequence
    }
}

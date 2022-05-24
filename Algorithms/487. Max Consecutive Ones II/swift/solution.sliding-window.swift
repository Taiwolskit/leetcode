class Solution {
    func findMaxConsecutiveOnes(_ nums: [Int]) -> Int {
        var longestSequence: Int = 0
        var left: Int = 0
        var right: Int = 0
        var numZeroes: Int = 0

        while right < nums.count {
            if nums[right] == 0 {
                numZeroes += 1
            }

            while numZeroes == 2 {
                if nums[left] == 0 {
                    numZeroes -= 1
                }
                left += 1
            }

            longestSequence = max(longestSequence, right - left + 1)
            right += 1
        }
        return longestSequence
    }
}

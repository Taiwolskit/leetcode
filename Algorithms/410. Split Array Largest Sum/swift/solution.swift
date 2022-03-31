class Solution {
    func splitArray(_ nums: [Int], _ m: Int) -> Int {
        var minLargetSplitSum = 0
        var left = nums.max()!
        var right = nums.reduce(0, +)
        while left <= right {
            let maxSumAllowed = (left + right) / 2

            if minSubarraysRequired(nums, maxSumAllowed) <= m{
                right = maxSumAllowed - 1
                minLargetSplitSum = maxSumAllowed
            } else {
                left = maxSumAllowed + 1
            }
        }

        return minLargetSplitSum
    }

    func minSubarraysRequired(_ nums: [Int], _ max_sum_allowed: Int) -> Int {
        var currentSum = 0
        var splitsRequired = 0

        for num in nums {
            if currentSum + num <= max_sum_allowed {
                currentSum += num
            } else {
                currentSum = num
                splitsRequired += 1
            }
        }

        return splitsRequired + 1
    }
}

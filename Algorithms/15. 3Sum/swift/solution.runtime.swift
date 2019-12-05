class Solution {
    func threeSum(_ nums: [Int]) -> [[Int]] {
        if nums.count < 3 {
            return []
        }
        var tempNums = nums
        tempNums.sort(by:<)
        var result:[[Int]] = []
        for count in 0..<tempNums.count-2 {
            if count > 0, tempNums[count] == tempNums[count-1] {
                continue
            }
            let targetSum = -(tempNums[count])
            var left = count+1
            var right = tempNums.count-1
            while left < right {
                let currentSum = tempNums[left] + tempNums[right]
                if currentSum > targetSum {
                    right -= 1
                } else if currentSum < targetSum {
                    left += 1
                } else {
                   result.append([-targetSum, tempNums[left], tempNums[right]]) 
                    while left+1 < tempNums.count, tempNums[left] == tempNums[left+1] {
                        left += 1
                    }
                    while right-1 > count, tempNums[right] == tempNums[right-1] {
                        right -= 1
                    }
                    left += 1
                    right -= 1
                }
            }
        }
        return result
    }
}
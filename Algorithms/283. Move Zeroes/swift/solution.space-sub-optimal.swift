class Solution {
    func moveZeroes(_ nums: inout [Int]) {
        let n: Int = nums.count

        var numZeroes: Int = 0
        for i in 0..<n {
            if nums[i] == 0 {
                numZeroes += 1
            }
        }

        var ans: [Int] = []
        for num in nums {
            if num != 0 {
                ans.append(num)
            }
        }

        while numZeroes > 0 {
            ans.append(0)
            numZeroes -= 1
        }

        nums = ans
    }
}
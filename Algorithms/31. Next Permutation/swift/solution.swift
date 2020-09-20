class Solution {
    func reverse(_ nums: inout [Int], _ left: Int, _ right: Int) {
        var left = left
        var right = right

        while left < right {
            nums.swapAt(left, right)
            left += 1
            right -= 1
        }
    }

    func nextPermutation(_ nums: inout [Int]) {
        guard nums.count > 1 else {
            return
        }

        var idx1 = nums.count - 2
        while idx1 >= 0 && nums[idx1] >= nums[idx1 + 1] {
            idx1 -= 1
        }

        if idx1 >= 0 {
            var idx2 = nums.count - 1
            while idx2 >= 0 && nums[idx2] <= nums[idx1] {
                idx2 -= 1
            }
            nums.swapAt(idx1, idx2)
        }
        reverse(&nums, idx1 + 1, nums.count - 1)
    }
}

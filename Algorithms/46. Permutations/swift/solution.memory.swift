class Solution {
    func permute(_ nums: [Int]) -> [[Int]] {
        var nums = nums
        var result = [[Int]]()
        permuteRecursive(&nums, 0, &result)
        return result
    }

    func permuteRecursive(_ nums: inout [Int], _ begin: Int, _ result: inout [[Int]] ) {
        if begin >= nums.count {
            result.append(nums)
            return
        }

        for i in begin..<nums.count {
            nums.swapAt(begin, i)
            permuteRecursive(&nums, begin+1, &result)
            nums.swapAt(begin, i)
        }
    }
}

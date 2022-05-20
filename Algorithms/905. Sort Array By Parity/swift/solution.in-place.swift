class Solution {
    func sortArrayByParity(_ nums: [Int]) -> [Int] {
        var i: Int = 0
        var j: Int = nums.count - 1
        var nums: [Int] = nums
        while i < j {
            if nums[i] % 2 == 0 {
                i += 1
            } else {
                nums.swapAt(i, j)
                j -= 1
            }
        }
        return nums
    }
}
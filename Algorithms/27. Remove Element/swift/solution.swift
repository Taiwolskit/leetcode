class Solution {
    func removeElement(_ nums: inout [Int], _ val: Int) -> Int {
        var count = nums.count
        var index = count - 1

        while index >= 0 {
            if nums[index] == val {
                nums.remove(at: index)
                count -= 1
            }

            index -= 1
        }

        return count
    }
}

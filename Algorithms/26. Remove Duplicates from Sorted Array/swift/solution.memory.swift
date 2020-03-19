class Solution {
    func removeDuplicates(_ nums: inout [Int]) -> Int {
        var index = nums.startIndex
        while index < nums.endIndex {
            let nextIndex = index + 1
            while nextIndex < nums.endIndex && nums[nextIndex] == nums[index] {
                nums.remove(at: nextIndex)
            }
            index += 1
        }
        return nums.count
    }
}

class Solution {
    func removeDuplicates(_ nums: inout [Int]) -> Int {
        var last: Int?
        var index: Int = 0
        while index < nums.count {
            if nums[index] == last {
                nums.remove(at: index)
            } else {
                last = nums[index]
                index += 1
            }
        }

        return nums.count
    }
}

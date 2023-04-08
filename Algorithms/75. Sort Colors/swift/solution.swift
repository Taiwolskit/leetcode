class Solution {
    func sortColors(_ nums: inout [Int]) {
        // for all idx < p0 : nums[idx < p0] = 0
        var p0: Int = 0
        // curr is an index of element under consideration
        var curr: Int = 0
        // for all idx > p2 : nums[idx > p2] = 2
        var p2: Int = nums.count - 1

        while curr <= p2 {
            if nums[curr] == 0 {
                nums.swapAt(p0, curr)
                p0 += 1
                curr += 1
            } else if nums[curr] == 2 {
                nums.swapAt(curr, p2)
                p2 -= 1
            } else {
                curr += 1
            }
        }
    }
}

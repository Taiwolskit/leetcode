class Solution {
    func removeDuplicates(_ nums: inout [Int]) -> Int {
        var i = 0
        guard nums.count > 0 else {
            return i
        }

        for j in 1..<nums.count {
            if nums[j] != nums[i] {
                i += 1
                nums[i] = nums[j]
            }
        }
        return i + 1
    }
}

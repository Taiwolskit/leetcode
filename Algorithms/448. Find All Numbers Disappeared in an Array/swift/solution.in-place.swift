class Solution {
    func findDisappearedNumbers(_ nums: [Int]) -> [Int] {
        var nums: [Int] = nums
        for i: Int in nums {
            nums[i - 1] = -abs(nums[i - 1])
        }

        var result: [Int] = [Int]()
        for (i, num) in nums.enumerated() {
            guard num < 0 else {
                result.append(i + 1)
                continue
            }
        }

        return result
    }
}

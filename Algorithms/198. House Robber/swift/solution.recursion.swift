class Solution {

    var memo: [Int: Int] = [Int: Int]()

    func rob(_ nums: [Int]) -> Int {
        return robFrom(0, nums: nums)
    }

    func robFrom(_ i: Int, nums: [Int]) -> Int {
        if i >= nums.count {
            return 0
        }
        if let memoized: Int = memo[i] {
            return memoized
        }
        let result: Int = max(robFrom(i + 1, nums: nums), nums[i] + robFrom(i + 2, nums: nums))
        memo[i] = result
        return result
    }
}

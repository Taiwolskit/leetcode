class Solution {
    func subsets(_ nums: [Int]) -> [[Int]] {
        var result: [[Int]] = []
        var current: [Int] = []
        buildSubset(nums, 0, &current, &result)
        return result
    }

    func buildSubset(
        _ nums: [Int],
        _ index: Int,
        _ current: inout [Int],
        _ result: inout [[Int]]
    ) {
        result.append(current)

        for nextIndex in index..<nums.count {
            current.append(nums[nextIndex])
            buildSubset(nums, nextIndex+1, &current, &result)
            current.removeLast()
        }
    }
}

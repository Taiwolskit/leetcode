class Solution {
    func subsets(_ nums: [Int]) -> [[Int]] {
        func backtrack(_ first: Int, _ curr: [Int]) {
            output.append(curr)

            for i in first..<nums.count {
                var newCurr = curr
                newCurr.append(nums[i])
                backtrack(i+1, newCurr)
            }
        }

        var output: [[Int]] = []
        backtrack(0, [])
        return output
    }
}

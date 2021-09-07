class Solution {
    func subsets(_ nums: [Int]) -> [[Int]] {
        var res = [[Int]]()
        var temp = [Int]()

        func dfs(_ start: Int) {
            res.append(temp)
            for i in start ..< nums.count {
                temp.append(nums[i])
                dfs(i + 1)
                temp.removeLast()
            }
        }

        dfs(0)
        return res
    }
}

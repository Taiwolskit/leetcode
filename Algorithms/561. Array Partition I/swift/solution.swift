class Solution {
    func arrayPairSum(_ nums: [Int]) -> Int {
        let nums: [Int] = nums.sorted()
        var res: Int = 0
        for i: Int in 0..<nums.count / 2 {
            res += nums[i * 2]
        }
        return res
    }
}
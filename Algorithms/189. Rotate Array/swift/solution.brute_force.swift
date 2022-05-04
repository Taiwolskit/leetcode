class Solution {
    func rotate(_ nums: inout [Int], _ k: Int) {
        let n = nums.count
        var step: Int = k % n

        for _ in 0..<step {
            var previous = nums[n - 1]
            for j in 0..<(n - 1) {
                let temp = nums[j]
                nums[j] = previous
                previous = temp
            }
        }
    }
}
class Solution {
    func rotate(_ nums: inout [Int], _ k: Int) {
        let n = nums.count
        var a: [Int] = Array.init(repeating: 0, count: n)
        for i in 0..<n {
            a[(i + k) % n] = nums[i]
        }
        for i in 0..<n {
            nums[i] = a[i]
        }
    }
}
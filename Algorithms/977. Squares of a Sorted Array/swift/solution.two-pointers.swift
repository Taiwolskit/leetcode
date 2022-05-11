class Solution {
    func sortedSquares(_ nums: [Int]) -> [Int] {
        let n = nums.count
        var left = 0
        var right = n - 1
        var result = Array(repeating: 0, count: n)

        for i in (0..<n).reversed() {
            var square = 0
            if abs(nums[left]) > abs(nums[right]) {
                square = nums[left]
                left += 1
            } else {
                square = nums[right]
                right -= 1
            }
            result[i] = square * square
        }

        return result
    }
}

class Solution {
    func rotate(_ nums: inout [Int], _ k: Int) {
        let n = nums.count
        let k = k % n

        var start = 0
        var count = 0
        while count < n {
            var current = start
            var prev = nums[start]

            repeat {
                let nextIdx = (current + k) % n
                let temp = nums[nextIdx]
                nums[nextIdx] = prev
                prev = temp
                current = nextIdx
                count += 1
            } while current != start
            start += 1
        }
    }
}
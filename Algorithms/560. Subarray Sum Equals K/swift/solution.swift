class Solution {
    func subarraySum(_ nums: [Int], _ k: Int) -> Int {
        var count = 0
        var sum = 0
        var map: [Int:Int] = [0:1]
        for num in nums {
            sum += num
            count += map[sum - k, default: 0]
            map[sum, default: 0] += 1
        }
        return count
    }
}

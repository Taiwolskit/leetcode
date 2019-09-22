class Solution {
    func twoSum(_ nums: [Int], _ target: Int) -> [Int] {
        var i1 = 0
        var i2 = nums.count - 1

        for i in 0...(nums.count - 1) {
            for j in (i + 1)...(nums.count - 1) {
                var sum = nums[i] + nums[j]

                if (sum == target) {
                    return [i, j]
                }
            }
        }
        
        return [0, 0]
    }
}